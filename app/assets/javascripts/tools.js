

$(document).on('click', '.lpu-token', function () {
    deleteOnClickToken($(this));
});

$(document).on('keydown', '.new-lpu-input', function (e) {

    $(this).css('border-color', '#93A1A1');

    if (e.keyCode == 13) {
        createToken($(this));
        e.preventDefault();
    }
    if (e.keyCode == 8) {
        deleteToken($(this));
    }
});

$(document).on('focusout', '.new-lpu-input', function () {
    $(this).css('border-color', '#657B83');
});

$(document).on('mouseover', '.follow-button', function () {
    //showFollowDiv($(this));
});

$(document).on('mouseout', '.follow-button', function () {
    //hideFollowDiv($(this));
});

$(document).on('click', '.like-image', function () {
    likeClickHandler($(this))
});

$(document).on('submit', '#new-tool-form', function(){
    $('.error-div').each(function(){
        $(this).css('display', 'none');
    });
});

$(document).on('focusout', '.tool-input', function(){
    ajaxValidation($(this).closest('form'), $(this), toolValidationSuccess, toolValidationFailed);
});

function toolValidationSuccess(){
    $('.error-div').each(function(){
        $(this).css('display', 'none');
    });
}

function toolValidationFailed(input_selector, data){
    var error_div = input_selector.closest('.col-xs-12').find('.error-div');
    var name = input_selector.attr('name').replace('tool[', '').replace(']','');

    console.log(error_div);

    if(data[name]){
        error_div.css('display', 'block');
        var error_ul = error_div.find('ul');
        error_ul.html('');
        for(var i = 0; i < data[name].length; i++){
            error_ul.append('<li>' + data[name][i] + '</li>');
        }
    }else{
        error_div.css('display', 'none');
    }
}


function ajaxUsersTools(page) {
    if ($('#user-area-tool').length > 0) {
        $.ajax({
            url: window.location.href + '/tools?page=' + page
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}


function likeClickHandler(selector) {
    /** missing If the ajax call is a success */
    if (selector.attr('data-likes') == 1) {
        selector.attr('src', '/assets/like_icon.png');
        selector.attr('data-likes', '0');

    } else if (selector.attr('data-likes') == 0) {
        selector.attr('src', '/assets/liked_icon.png');
        selector.attr('data-likes', '1');
    }
}


function hideFollowDiv(button) {
    button.closest('.follow-main').find('.follow-hover-div').css('display', 'none');
}

function showFollowDiv(button) {
    button.closest('.follow-main').find('.follow-hover-div').css('display', 'block');
}

function createToken(selector) {

    if (selector.val() != '') {
        var inputString = selector.val().trim();
        var ulParent = selector.closest('.new-ul');

        if(!doesTokenExist(inputString, ulParent)) {
            ajaxValidateToken(inputString, selector, ulParent.find('.lpu-token').size());
        }else{
            lpuFailed(selector, null);
        }
    }
}



function doesTokenExist(tokenString, ulParent){
    var didFind = false;
    ulParent.find('.lpu-token').each(function () {
        if($(this).html().toLowerCase() === tokenString.toLowerCase()){
            didFind = true;
            return false;
        }
    });
    return didFind;
}

function deleteOnClickToken(selector) {
    var ulParent = selector.closest('.new-ul');
    var input = $('#' + ulParent.attr('id') + ' li:eq(0)').children('.new-lpu-input');
    input.val('' + selector.text());

    var tokenli = selector.closest('.token-li');

    var liW = parseInt(tokenli.css("width"));
    var ulW = parseInt(ulParent.css("width"));
    ulParent.css('width', ulW - liW - 5 + 'px');
    tokenli.remove();

}

function deleteToken(selector) {

    var ulParent = selector.closest('.new-ul');
    var li = $('#' + ulParent.attr('id') + ' li:eq(1)');

    if (!li.hasClass("input-lpu") && selector.val() == '') {
        selector.val(li.find('p:first').text());
        var liW = parseInt(li.css("width"));
        var ulW = parseInt(ulParent.css("width"));
        ulParent.css('width', ulW - liW - 5 + 'px');
        li.remove();
    }
}

function createTokenHtml(inputString, typeString) {
    var safe = htmlSafeInput(inputString);
    return '<li class="token-li" style="margin-right: 5px"> ' +
                '<p class="lpu-token">' + safe + '</p>' +
                '<input type="hidden" name="tool[' + typeString + '][names]['+ safe + ']" value=' + safe+ '> </input>' +
            '</li>'
}

function initToolLPUScroller() {
    $('.rain-scroll').mCustomScrollbar({
        axis: "y",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        alwaysShowScrollbar: 0,
        scrollInertia: 0,
        mouseWheel: {preventDefault: true}
    });


    $('.new-rain').mCustomScrollbar({
        axis: "x",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        theme: "light-thin",
        scrollInertia: 0,
        advanced: {updateOnSelectorChange: ".new-ul"},
        mouseWheel: {preventDefault: true}
    });

    $('.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal').css({
        'bottom': '-6px',
        'width': '100%'
    });

    $('.mCSB_horizontal').css('border-radius', '5px');
}