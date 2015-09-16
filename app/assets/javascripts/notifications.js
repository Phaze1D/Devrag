
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
        url: '/users/-1/notifications'
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