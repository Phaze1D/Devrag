$(document).on('click', '#comment-addo', function () {
    showAddComment();
});

$(document).on('click', '#comment-addr', function () {
    cancelComment();
});

$(document).on('click', '#comment-addc', function () {
    addComment();
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
    closeAddComment();
}

function addComment() {
    closeAddComment();
}