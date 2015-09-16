

$(document).on('click', '#header-div',function(){
    menuAnim();
});

$(document).on('click', '#notification-button', function(e){
    showNotifications();
    e.preventDefault();
});

function showNotifications(){
    var notidiv =  $('#notification-div');

    if(notidiv.css('opacity') == '1'){
        $('.notis-area').html('nonono');
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
        url: '/notifications'
    }).done(function(data){
        console.log(data);
    }).fail(function(){
        console.log('faild')
    }).always(function(){
        $('#notification-div').removeClass('spinner');
    });
}

function removeNoti(e){
    var container = $("#notification-div");
    if (!didClickTarget(container, e)){
        $('.notis-area').empty();
        container.css('opacity', '0');
        container.css('display', 'none');
    }
}

function menuAnim(){
    var menu = $('#menu-div');

    if(menu.css('opacity') == '1'){
        menu.css('opacity', '0');
        menu.css('display','none');
        //menu.css('-webkit-transform:', 'scale(.5)');
        //menu.css('-moz-transform', 'scale(.5)');
        //menu.css('-o-transform', 'scale(.5)');
        //menu.css('transform', 'scale(.5)');


    }else{
        menu.css('opacity', '1');
        menu.css('display','initial');
        //menu.css('-webkit-transform:', 'scale(1)');
        //menu.css('-moz-transform', 'scale(1)');
        //menu.css('-o-transform', 'scale(1)');
        //menu.css('transform', 'scale(1)');
    }
}

function removeMenu(e) {
    var container = $("#menu-div");
    if (!didClickTarget(container, e)){
        container.css('opacity', '0');
        container.css('display', 'none');
    }
}
