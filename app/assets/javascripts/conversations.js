

$(document).on('click', '.con-arror', function(){

    if ($(this).attr('data-open') == 0) {
        showConReplies($(this));
    } else {
        hideConReplies($(this));
    }
});

$(document).on('click', '.con-up-arror', function(){

    if ($(this).attr('data-open') == 0) {
        showConParent($(this));
    } else {
        hideConParent($(this));
    }
});

function showConReplies($sel){

    var height = $sel.closest('.conr').find('.con-replies')[0].scrollHeight + 20;
    $sel.closest('.conr').find('.con-replies').css({
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

function showConParent($sel){

    var height = $sel.closest('.conr').find('.con-parent')[0].scrollHeight + 20;
    $sel.closest('.conr').find('.con-parent').css({
        'max-height': height + 'px',
        'padding': '0px 0 10px'
    });

    $sel.css({
        '-webkit-transform': 'rotate(0deg)', /* Chrome and other webkit browsers */
        '-moz-transform': 'rotate(0deg)', /* FF */
        '-o-transform': 'rotate(0deg)', /* Opera */
        '-ms-transform': 'rotate(0deg)', /* IE9 */
        'transform': 'rotate(0deg)'
    });

    $sel.attr('data-open', 1);

}

function hideConReplies($sel){

    $sel.closest('.conr').find('.con-replies').css({
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

function hideConParent($sel){

    $sel.closest('.conr').find('.con-parent').css({
        'max-height': '0px',
        'padding': '0px'
    });

    $sel.css({
        '-webkit-transform': 'rotate(180deg)', /* Chrome and other webkit browsers */
        '-moz-transform': 'rotate(180deg)', /* FF */
        '-o-transform': 'rotate(180deg)', /* Opera */
        '-ms-transform': 'rotate(180deg)', /* IE9 */
        'transform': 'rotate(180deg)'
    });

    $sel.attr('data-open', 0);

}

function ajaxIndexConversation(){

    if ($('#conversation-div').length > 0) {

        $.ajax({
            url: $('#conversation-div').attr('data-url')
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }

}