


$(document).on('click', '#comment-addo', function(){
	showAddComment();
});

$(document).on('click', '#comment-addr', function(){
	cancelComment();
});

$(document).on('click', '#comment-addc', function(){
	addComment();
});

$(document).on('click', '.lpu-token', function(){
    deleteOnClickToken($(this));
});

$(document).on('keydown', '.new-lpu-input',function(e){

    if(e.keyCode == 13) {
        createToken($(this));
    }
    if (e.keyCode == 8) {
        deleteToken($(this));
    }
});

$(document).on('click', '.reply-b', function(e){
    showReplyArea($(this));
    e.preventDefault();
});

$(document).on('click', '.reply-add-img', function(){
    removeReplyArea($(this));
});

$(document).on('click', '.reply-rem-img', function(){
    removeReplyArea($(this));
});

$(document).on('mouseover', '.follow-button', function(){
    showFollowDiv($(this));
});

$(document).on('mouseout', '.follow-button', function(){
    hideFollowDiv($(this));
});

$(document).on('click', '.like-image', function(){
    likeClickHandler($(this))
});


function removeReplyArea(selector){
    selector.closest('.main-parent').find('.reply-area').css('display', 'none');
}

function showReplyArea(selector){
    selector.closest('.main-parent').find('.reply-area').css('display', 'block');
}

function likeClickHandler(selector){
    /** If the ajax call is a success */
    if (selector.attr('data-likes') == 1) {
        selector.attr('src', '/assets/like_icon.png');
        selector.attr('data-likes', '0');

    }else if(selector.attr('data-likes') == 0){
        selector.attr('src', '/assets/liked_icon.png');
        selector.attr('data-likes', '1');
    }
}


function hideFollowDiv(button){
    button.closest('.follow-main').find('.follow-hover-div').css('display', 'none');
}

function showFollowDiv(button){
    button.closest('.follow-main').find('.follow-hover-div').css('display', 'block');
}

function createToken(selector){

    if(selector.val() != ''){
        var inputString = selector.val().trim();
        var ulParent = selector.closest('.new-ul');

        // Check if inputString exist and validate 
        // Check if inputString is already listed

        $( '#'+ulParent.attr('id') + ' li:first').after(createTokenHtml(inputString));
        var liW = parseInt($( '#'+ulParent.attr('id') + ' li:eq(1)').css("width"));
        var ulW = parseInt(ulParent.css("width"));
        ulParent.css('width', ulW+liW+5+'px');
        selector.val('');
    }

}

function deleteOnClickToken(selector){
    var ulParent = selector.closest('.new-ul');
    var input = $('#'+ulParent.attr('id') + ' li:eq(0)').children('.new-lpu-input');
    input.val(''+ selector.text());
    console.log(selector.text());
    var tokenli = selector.closest('.token-li');

    var liW = parseInt(tokenli.css("width"));
    var ulW = parseInt(ulParent.css("width"));
    ulParent.css('width', ulW-liW-5+'px');
    tokenli.remove();

}

function deleteToken(selector){

    var ulParent = selector.closest('.new-ul');
    var li = $('#'+ulParent.attr('id') + ' li:eq(1)');

    if (!li.hasClass("input-lpu") && selector.val() == ''){
         selector.val(li.find('p:first').text());
         var liW = parseInt(li.css("width"));
         var ulW = parseInt(ulParent.css("width"));
         ulParent.css('width', ulW-liW-5+'px');
         li.remove();
    };

}

function createTokenHtml(inputString){
    var safe = htmlSafeInput(inputString);
    return '<li class="token-li" style="margin-right: 5px"> <p class="lpu-token">'+safe+'</p></li>'
}


function showAddComment(){

	var y = 165;
	$('#comment-addo').css('display', 'none');
	$('#add-comment-section').css({
        '-webkit-transform': 'translate(0,' + y + 'px)',
        '-moz-transform': 'translate(0,' + y + 'px)',
        '-ms-transform': 'translate(0,' + y + 'px)',
        '-o-transform': 'translate(0,' + y + 'px)',
        'transform': 'translate(0,' + y + 'px)'
    });
}

function closeAddComment(){
	var y = 0;
	$('#comment-addo').css('display', 'block');
	$('#add-comment-section').css({
        '-webkit-transform': 'translate(0,' + y + 'px)',
        '-moz-transform': 'translate(0,' + y + 'px)',
        '-ms-transform': 'translate(0,' + y + 'px)',
        '-o-transform': 'translate(0,' + y + 'px)',
        'transform': 'translate(0,' + y + 'px)'
    });
}

function cancelComment(){
	closeAddComment();
}

function addComment(){
	closeAddComment();
}

function initToolLPUScroller(){
	$('.rain-scroll').mCustomScrollbar({
        axis:"x",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        alwaysShowScrollbar: 0,
        scrollInertia: 0
    });
 

    $('.new-rain').mCustomScrollbar({
        axis:"x",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        scrollInertia: 0,
        advanced:{ updateOnSelectorChange: ".new-ul" }
    });

    $('.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal').css('bottom', '-16px');
    $('.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal').css('width', '100%');

    $('.mCSB_horizontal').css('border-radius','20px');
}

