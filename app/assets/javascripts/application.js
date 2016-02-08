// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require tinymce
//= require highlight
//= require_tree .



$(document).on("page:load ready", function () {
    initLPUSeachScroller();
    initUserAreaScroller();
    initToolLPUScroller();
    $('.mCSB_outside + .mCSB_scrollTools').css('right', '-16px');

    ajaxUsersTools(1, false, '');
    ajaxUsersFollows(1, false, '');
    ajaxCommentIndex();
    ajaxTellsIndex();
    ajaxIndexConversation();
    ajaxGithubIndex();
    moveToComments();

});

$(document).mouseup(function (e) {
    removeMenu(e);
    removeOptionPop(e);
    removeSortDropdown(e);
    removeNoti(e);
});

$(window).on('resize', function () {
    adjust();
});

$(document).on('click', 'a', function(e){
    if(!$(this).hasClass('no-link')) {
        tinymce.remove();
    }
});

$(window).on('popstate', function(event) {
    tinymce.remove();
});


$(document).on('click', '.pagination a', function (e) {
    ajaxPagination(this);
    e.preventDefault();

});


function ajaxPagination(selector) {

    $.ajax({
        url: selector.href
    }).done(function (data) {

    }).fail(function () {
        console.log('faild')
    });

}


function ajaxValidation(form, input_selector, success, failed){

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        dataType: 'json'
    }).done(function(){
        success();
    }).fail(function(data){
        failed(input_selector, data.responseJSON);
    });
}

function didClickTarget(container, event) {

    return !(!container.is(event.target) && container.has(event.target).length === 0);
}

function htmlSafeInput(text) {
    return $('<div/>').text(text).html();
}

initTinymce();

function initTinymce(){
    tinymce.init({
        selector: ".comment-area",
        toolbar: ["mycode | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent"],
        plugins: "autoresize",
        menubar: false,
        statusbar: false,
        width: "100%",
        autoresize_max_height: 1500,
        content_css : '/assets/solarized-light.scss',
        forced_root_block : "",
        force_br_newlines : true,
        force_p_newlines : false,
        remove_redundant_brs : true,
        setup : function(ed) {
            // Add a custom button
            ed.addButton('mycode', {
                title : 'Insert/Edit code samples',
                icon: 'mce-ico mce-i-codesample',
                onclick : function() {
                    addCodeDiv($('#'+ed.id));
                    ed.focus();

                }
            });
        }
    });
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? false : sParameterName[1];
        }
    }
}
