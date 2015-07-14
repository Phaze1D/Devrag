
/**
 * Handles the down arror click animation
 */
$(document).on('click','#name-down-arror', function(){
    $(this).fadeOut('fast');
    openName();
    closeLPU();
});



/*
    Make function for name animation show and remove, and other function for
    LPU animation show and remove (DRY clean code)
 */

function openName(){
    $('#name-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#name-hidden-box').animate({
        'top': '15px'
    },300,'linear', function () {
        $('#name-hidden-box').fadeOut('fast');
    });
}

function closeName(){

}

function openLPU(){

}

function closeLPU(){
    var lpuhb = $('#lpu-hidden-box');
    lpuhb.animate({
        'opacity': '1'
    },100,'linear', function () {

    });
    $('#lang-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    $('#plat-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    $('#use-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');

    lpuhb.animate({
        'top': '-40px'
    },300,'linear', function () {

    });
}