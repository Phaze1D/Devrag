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
//= require_tree .

$(document).on("page:load ready", function () {
    initLPUSeachScroller();
    initUserAreaScroller();
    initToolLPUScroller();
    $('.mCSB_outside + .mCSB_scrollTools').css('right', '-16px');

    ajaxUsersTools(1, false);
    ajaxUsersFollows(1, false);
    ajaxCommentIndex();

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

