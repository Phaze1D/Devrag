

$(document).on('click', '#header-div',function(){
    menuAnim();
});

$(document).mouseup(function (e)
{
    var container = $("#menu-div");

    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.css('opacity', '0');
    }
});

function menuAnim(){
    var menu = $('#menu-div');

    if(menu.css('opacity') == '1'){
        menu.css('opacity', '0');
        //menu.css('-webkit-transform:', 'scale(.5)');
        //menu.css('-moz-transform', 'scale(.5)');
        //menu.css('-o-transform', 'scale(.5)');
        //menu.css('transform', 'scale(.5)');


    }else{
        menu.css('opacity', '1');
        //menu.css('-webkit-transform:', 'scale(1)');
        //menu.css('-moz-transform', 'scale(1)');
        //menu.css('-o-transform', 'scale(1)');
        //menu.css('transform', 'scale(1)');
    }
}
