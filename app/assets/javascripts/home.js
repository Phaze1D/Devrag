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
    adjust();
});

$(document).on('click','#options-image', function(){
    resultToolOptionsClicked(this);
});

$(document).on('click','#dropdown-sortB',function(){
    dropdownClicked();
    console.log('testing')
});

$(document).on('click', '.m-li', function(){
    console.log($(this).html());
    mLiClicked(this);
});


function openName() {
    $('#name-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#name-hidden-box').animate({
        'top': '20px'
    }, 200, 'linear', function () {
        $('#name-hidden-box').css('opacity', '0');
    });
}


function closeName() {
    var nameHB = $('#name-hidden-box');
    var topv = '-40px';

    if ($(".mediadiv").css('display') == 'block') {
        topv = '-60px';
    }

    nameHB.css('opacity', '1');
    $("#name-title").removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    nameHB.animate({
        'top': topv
    }, 200, 'linear', function () {

    });
}


function openLPU() {
    $('#use-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#lang-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#plat-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');

    $('#lpu-hidden-box').animate({
        'top': '20px'
    }, 200, 'linear', function () {
        $('#lpu-hidden-box').css('opacity', '0');
    });
}


function closeLPU() {
    var lpuhb = $('#lpu-hidden-box');
    var topv = '-40px';
    var height = '50px';

    if ($(".mediadiv").css('display') == 'block') {
        topv = '-245px';
        height = '240px';
    }


    lpuhb.css('opacity', '1');
    lpuhb.find(':first-child').css('height', height);
    $('#lang-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    $('#plat-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');
    $('#use-title').removeClass('title-2-alive underline-alive').addClass('title-2-dead');

    lpuhb.animate({
        'top': topv
    }, 200, 'linear', function () {

    });
}

var sm_adjusted = false;
var lg_adjusted = false;
function adjust() {

    var mediadiv = $(".mediadiv");

    if (mediadiv.css('display') == 'block' && !sm_adjusted) {

        if ($('#name-title').hasClass('title-2-dead')) {
            $('#name-hidden-box').css('top', '-60px');
            sm_adjusted = true;
            lg_adjusted = false;
        }

        if ($('#lang-title').hasClass('title-2-dead')) {
            var lpuhb = $('#lpu-hidden-box');
            lpuhb.css('top', '-245px');
            lpuhb.find(':first-child').css('height', '240px');
            sm_adjusted = true;
            lg_adjusted = false;
        }


    } else if (mediadiv.css('display') == 'none' && !lg_adjusted) {

        if ($('#name-title').hasClass('title-2-dead')) {
            $('#name-hidden-box').css('top', '-40px');
            sm_adjusted = false;
            lg_adjusted = true;
        }

        if ($('#lang-title').hasClass('title-2-dead')) {
            var lpuhb = $('#lpu-hidden-box');
            lpuhb.css('top', '-40px');
            lpuhb.find(':first-child').css('height', '50px');
            sm_adjusted = false;
            lg_adjusted = true;
        }
    }
}

function removeOptionPop(e){

    var didClickAny = false;

    $('.option-js').each(function(){
        if( didClickTarget($(this), e)  && $(this).closest('#uta').attr('data-ani') == 1 ){
            didClickAny = true;
            return 0;
        }
    });

    if( !didClickAny ) {
        $('.uta-class').each(function () {
            if ($(this).attr('data-ani') == 1) {
                moveBackTool($(this));
            }
        });
    }

}

function dropdownClicked(){
    var selector = $('#dropdown-sortL');
    selector.css('display', 'block');
    selector.css('opacity', '1');
}

function mLiClicked(selector){

     $(selector).parent().parent().children(":first").html($(selector).html());
    var list = $('#dropdown-sortL');
    list.css('display', 'none');
    list.css('opacity', '0');
}

function resultToolOptionsClicked(selector) {
    var closetP = $(selector).closest('#uta');

    if($(closetP).attr('data-ani') == 0){
        closetP.css({
            '-webkit-transform': 'translate(-90%, 0)',
            '-moz-transform': 'translate(-90%, 0)',
            '-ms-transform': 'translate(-90%, 0)',
            '-o-transform': 'translate(-90%, 0)',
            'transform': 'translate(-85%, 0)'
        });
        $(closetP).attr('data-ani', '1')
    }else{
        moveBackTool($(closetP));
    }
}

function moveBackTool(selector){
    selector.css({
        '-webkit-transform': 'translate(0, 0)',
        '-moz-transform': 'translate(0, 0)',
        '-ms-transform': 'translate(0, 0)',
        '-o-transform': 'translate(0, 0)',
        'transform': 'translate(0, 0)'
    });
    selector.attr('data-ani', '0')
}
