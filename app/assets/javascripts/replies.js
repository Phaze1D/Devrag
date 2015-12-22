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

$(document).on('click', '.reply-arror', function () {
    if ($(this).attr('data-open') == 0) {
        showReplies($(this));
    } else {
        removeReplies($(this));
    }
});

$(document).on('click', '.replies-div', function (e) {
    ajaxShowReply($(this));
    e.preventDefault();
    e.stopPropagation();
});

function ajaxShowReply(rSelc) {
    var commentBx = rSelc.closest('.comment-box');
    var id = rSelc.attr('href').split('/')[4];


    if(tinymce.get('reply-area-'+id)){
        highlightBox(id);
        removeReplies(rSelc.closest('.replies-area').find('.reply-arror'));
    }else{
        tinymce.remove();
        $.ajax({
            url: rSelc.attr('href'),
            dataType: 'html'
        }).done(function (data) {
            removeReplies(rSelc.closest('.replies-area').find('.reply-arror'));
            commentBx.after(data);
            initTinymce();
        }).fail(function (data) {

        }).always(function () {

        });
    }

}

function highlightBox(id) {

}

function showReplies($sel) {
    var height = $sel.closest('.replies-area').find('.rdivs')[0].scrollHeight + 20;
    $sel.closest('.replies-area').find('.rdivs').css({
        'max-height': height + 'px',
        'padding': '10px 0'
    });

    $sel.css({
        '-webkit-transform': 'rotate(180deg)', /* Chrome and other webkit browsers */
        '-moz-transform': 'rotate(180deg)', /* FF */
        '-o-transform': 'rotate(180deg)', /* Opera */
        '-ms-transform': 'rotate(180deg)', /* IE9 */
        'transform': 'rotate(180deg)'
    });

    $sel.attr('data-open', 1);
}

function removeReplies($sel) {
    $sel.closest('.replies-area').find('.rdivs').css({
        'max-height': '0px',
        'padding': '0px'
    });

    $sel.css({
        '-webkit-transform': 'rotate(0deg)', /* Chrome and other webkit browsers */
        '-moz-transform': 'rotate(0deg)', /* FF */
        '-o-transform': 'rotate(0deg)', /* Opera */
        '-ms-transform': 'rotate(0deg)', /* IE9 */
        'transform': 'rotate(0deg)'
    });

    $sel.attr('data-open', 0);
}

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
    var editorid = inputsel.attr('id');
    tinymce.get(editorid).save();
    tinymce.get(editorid).setContent('');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function (data) {
        removeReplyArea($(this));
    }).fail(function (data) {
        commentFailed(inputsel, data.responseJSON);
    });
}