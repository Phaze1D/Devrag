
$(document).on('click', '#notification-button', function(e){
    showNotifications();
    e.preventDefault();
});

$(document).on('click', '.noti-cross', function(){
    removeNotifiction($(this));
});


function removeNotifiction(notiCross){
    var container = notiCross.closest('.noti-container');
    var num = -320;
    container.css({
        '-webkit-transform': 'translate('+num+ 'px,0)',
        '-moz-transform': 'translate('+num+ 'px,0)',
        '-ms-transform': 'translate('+num+ 'px,0)',
        '-o-transform': 'translate('+num+ 'px,0)',
        'transform': 'translate('+num+ 'px,0)'
    });


    container.animate({
        opacity: 0.99
    }, 350, "linear", function() {
        container.remove();
    });


}

function showNotifications(){
    var notidiv =  $('#notification-div');

    if(notidiv.css('opacity') == '1'){
        notidiv.css('opacity', '0');
        notidiv.css('display','none');

    }else{
        notidiv.css('opacity', '1');
        notidiv.css('display','initial');
        notidiv.addClass('spinner');

        ajaxRetriveNotifications()
    }

    menuAnim();

}

function ajaxRetriveNotifications(){

    $.ajax({
        url: '/users/-1/notifications'
    }).done(function(data){
        //console.log(data);
    }).fail(function(){
        console.log('faild')
    }).always(function(){
        $('#notification-div').removeClass('spinner');
    });
}

function removeNoti(e){
    var container = $("#notification-div");
    if (!didClickTarget(container, e)){
        $('.noti-lower-area').empty();
        container.css('opacity', '0');
        container.css('display', 'none');
    }
}

