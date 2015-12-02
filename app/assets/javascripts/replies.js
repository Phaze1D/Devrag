$(document).on('click', '.reply-b', function (e) {
    showReplyArea($(this));
    e.preventDefault();
});

$(document).on('click', '.reply-add-img', function () {
    removeReplyArea($(this));
    ajaxCreateReply($(this))
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


function ajaxCreateReply(button) {
    var form = button.closest('.reply-form');
    var inputsel = button.closest('.reply-form').find('.comment-area');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function(data){

    }).fail(function(data){

    });
}