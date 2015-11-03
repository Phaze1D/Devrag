

$(document).on('click', '#header-div',function(){
    menuAnim();
});

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