/**
 * Handles the down arror click animation
 */
$(document).on('click', '#name-down-arror', function () {
    openName();
    closeLPU();
});

$(document).on('click', '#lpu-down-arror', function () {
    closeName();
    openLPU();
});

$(window).on('resize', function () {
    ajust();
});

/*
 Make function for name animation show and remove, and other function for
 LPU animation show and remove (DRY clean code)
 */

function openName() {
    $('#name-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#name-hidden-box').animate({
        'top': '20px'
    }, 300, 'linear', function () {
        $('#name-hidden-box').css('opacity', '0');
    });
}


function closeName() {

    var topv = '-40px';
    if ($(".mediadiv").css('display') == 'block') {
        topv = '-60px';
    }


    var nameHB = $('#name-hidden-box');
    nameHB.css('opacity', '1');
    $("#name-title").removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    nameHB.animate({
        'top': topv
    }, 300, 'linear', function () {

    });
}

function openLPU() {
    $('#use-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#lang-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#plat-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');

    $('#lpu-hidden-box').animate({
        'top': '20px'
    }, 300, 'linear', function () {
        $('#lpu-hidden-box').css('opacity', '0');
    });
}

function closeLPU() {

    var topv = '-40px';
    var height = '50px';
    if ($(".mediadiv").css('display') == 'block') {
        topv = '-245px';
        height = '240px';
    }

    var lpuhb = $('#lpu-hidden-box');
    lpuhb.css('opacity', '1');

    lpuhb.find(':first-child').css('height', height);
    $('#lang-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    $('#plat-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    $('#use-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');

    lpuhb.animate({
        'top': topv
    }, 300, 'linear', function () {

    });
}

var sm_ajusted = false;
var lg_ajusted = false;
function ajust() {

    var mediadiv = $(".mediadiv");

    if (mediadiv.css('display') == 'block' && !sm_ajusted) {

        if ($('#name-title').hasClass('title-2-dead')) {
            $('#name-hidden-box').css('top', '-60px');
            sm_ajusted = true;
            lg_ajusted = false;
            console.log('name-sm-change');
        }

        if ($('#lang-title').hasClass('title-2-dead')) {
            var lpuhb = $('#lpu-hidden-box');
            lpuhb.css('top', '-245px');
            lpuhb.find(':first-child').css('height', '240px');
            sm_ajusted = true;
            lg_ajusted = false;
            console.log('lpu-sm-change');
        }


    } else if (mediadiv.css('display') == 'none' && !lg_ajusted) {

        if ($('#name-title').hasClass('title-2-dead')) {
            $('#name-hidden-box').css('top', '-40px');
            sm_ajusted = false;
            lg_ajusted = true;
            console.log('name-lg-change');
        }

        if ($('#lang-title').hasClass('title-2-dead')) {
            var lpuhb = $('#lpu-hidden-box');
            lpuhb.css('top', '-40px');
            lpuhb.find(':first-child').css('height', '50px');
            sm_ajusted = false;
            lg_ajusted = true;
            console.log('lpu-lg-change');
        }
    }
}