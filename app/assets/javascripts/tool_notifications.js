
$(document).on('click', '.notify-link', function (e) {

    ajaxCreateToolNotify();
    e.preventDefault();
});

$(document).on('click', '#cancel-noti', function () {
    cancelNoti();

});

function cancelNoti() {

    var htmlBody =  $('html, body');
    htmlBody.animate({
        scrollTop: htmlBody.offset().top
    }, 500, function () {
        $('#notify-sect').html(' ');
    });

}

//  CHANGE URL TO ADD TOOL_ID
function ajaxCreateToolNotify() {
    $.ajax({
        url: '/tools/-1/tool_notifications/new'
    }).done(function (data) {

    }).fail(function () {
        console.log('fail');
    }).always(function () {
        console.log('always');
    });
}