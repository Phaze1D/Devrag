$(document).on('click', '#notification-button', function (e) {
    showNotifications($(this));
    e.preventDefault();
});

$(document).on('click', '.noti-cross', function () {
    removeNotifiction($(this));
});


var num2 = 0;

function removeNotifiction(notiCross) {
    var container = notiCross.closest('.noti-li');

    ajaxDestroyNotification(notiCross);
    num2 -= 70;
    cssAnimation(container);
    removeCallback(container);
}

function cssAnimation(container) {

    var lower = false;
    var num = -370;

    $('#noti-ul').children().each(function () {

        $(this).css({
            '-webkit-transition': '0.3s',
            '-moz-transition': '0.3s',
            '-o-transition': '0.3s',
            'transition': '0.3s'
        });

        if (container.get(0) == this) {
            container.css({
                '-webkit-transform': 'translate(' + num + 'px,' + (num2 + 70) + 'px)',
                '-moz-transform': 'translate(' + num + 'px,' + (num2 + 70) + 'px)',
                '-ms-transform': 'translate(' + num + 'px,' + (num2 + 70) + 'px)',
                '-o-transform': 'translate(' + num + 'px,' + (num2 + 70) + 'px)',
                'transform': 'translate(' + num + 'px,' + (num2 + 70) + 'px)'
            });
            lower = true;
        } else if (lower) {
            $(this).css({
                '-webkit-transform': 'translate(0,' + num2 + 'px)',
                '-moz-transform': 'translate(0,' + num2 + 'px)',
                '-ms-transform': 'translate(0,' + num2 + 'px)',
                '-o-transform': 'translate(0,' + num2 + 'px)',
                'transform': 'translate(0,' + num2 + 'px)'
            });
        }
    });
}

function removeCallback(container) {
    container.animate({
        opacity: 0.99
    }, 450, "linear", function () {
        num2 += 70;
        var lowers = false;
        $('#noti-ul').children().each(function () {

            $(this).css({
                '-webkit-transition': '0s',
                '-moz-transition': '0s',
                '-o-transition': '0s',
                'transition': '0s'
            });

            if (container.get(0) == this) {
                lowers = true;
            } else if (lowers) {
                $(this).css({
                    '-webkit-transform': 'translate(0,' + (num2 ) + 'px)',
                    '-moz-transform': 'translate(0,' + (num2) + 'px)',
                    '-ms-transform': 'translate(0,' + (num2) + 'px)',
                    '-o-transform': 'translate(0,' + (num2 ) + 'px)',
                    'transform': 'translate(0,' + (num2 ) + 'px)'
                });
            }


        });
        container.remove();

    });
}

function showNotifications(atag) {
    var notidiv = $('#notification-div');

    if (notidiv.css('opacity') == '1') {
        notidiv.css('opacity', '0');
        notidiv.css('display', 'none');

    } else {
        notidiv.css('opacity', '1');
        notidiv.css('display', 'initial');
        notidiv.addClass('spinner');

        ajaxRetriveNotifications(atag)
    }

    menuAnim();

}

function ajaxRetriveNotifications(atag) {

    $.ajax({
        url: atag.attr('href')
    }).done(function (data) {
        num2 = 0;
    }).fail(function () {
        console.log('faild')
    }).always(function () {
        $('#notification-div').removeClass('spinner');
    });
}

function removeNoti(e) {
    var container = $("#notification-div");
    if (!didClickTarget(container, e)) {
        $('.noti-lower-area').empty();
        container.css('opacity', '0');
        container.css('display', 'none');
    }
}

function ajaxDestroyNotification(img){

    $.ajax({
        url: img.attr('data-href'),
        type: 'DELETE'
    }).done(function (data) {

    }).fail(function () {
        console.log('destory failed')
    }).always(function () {

    });
}