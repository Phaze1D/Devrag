$(document).on('click', '.reply-b', function (e) {
    showReplyArea($(this));
    e.preventDefault();
});

$(document).on('click', '.reply-add-img', function () {
    ajaxCreateReply($(this))
});

$(document).on('click', '.reply-rem-img', function () {
    removeReplyArea($(this));
});

function removeReplyArea(selector) {
    var replyA = selector.closest('.main-parent').find('.reply-area');
    replyA.find('.error-div').css('display', 'none');
    replyA.css('display', 'none');
}

function showReplyArea(selector) {
    selector.closest('.main-parent').find('.reply-area').css('display', 'block');
}


function ajaxCreateReply(button) {
    var form = button.closest('.reply-form');
    var inputsel = button.closest('.reply-form').find('.comment-area');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function(data){
        removeReplyArea($(this));
    }).fail(function(data){
        commentFailed(inputsel, data.responseJSON);
    });
}