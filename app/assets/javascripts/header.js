

$(document).on('click', '#header-div',function(){
    menuAnim();
});

$(document).mouseup(function (e) {
    removeMenu(e);
    removeOptionPop(e);
});

function removeOptionPop(e){
    var container = $(".options-popup");
    container.each(function () {
        var item = $(this);
        if (!item.is(e.target) && item.has(e.target).length === 0){
            item.css('display','none');
        }
    });
}

function removeMenu(e){

    var container = $("#menu-div");

    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.css('opacity', '0');
        container.css('display','none');
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
