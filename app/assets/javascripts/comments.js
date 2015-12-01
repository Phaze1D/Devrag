$(document).on('click', '#comment-addo', function () {
    showAddComment();
});

$(document).on('click', '#comment-addr', function () {
    addComment($(this));
});

$(document).on('click', '#comment-addc', function () {

});


$(document).on('click', '.reply-b', function (e) {
    showReplyArea($(this));
    e.preventDefault();
});

$(document).on('click', '.reply-add-img', function () {
    removeReplyArea($(this));
});

$(document).on('click', '.reply-rem-img', function () {
    removeReplyArea($(this));
});

function removeReplyArea(selector) {
    selector.closest('.main-parent').find('.reply-area').css('display', 'none');
}

function showReplyArea(selector) {
    selector.closest('.main-parent').find('.reply-area').css('display', 'block');
}


function showAddComment() {

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

function closeAddComment() {
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

function cancelComment() {

}

function addComment(button) {
    ajaxCommentAdd(button)
}

function ajaxCommentAdd(button){
    var form = button.closest('.comment-form');
    var inputsel = button.closest('.comment-form').find('.comment-area');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function(data){
        commentSuccess(inputsel,data);
    }).fail(function(data){
        commentFailed(inputsel, data);
    });

}

function commentSuccess(inputsel, data){
    inputsel.val('');
}

function commentFailed(inputsel, data){

}


function ajaxCommentIndex(){

    if($('#comment-index').length > 0){
        $.ajax({
            url: window.location.href + '/comments'
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}