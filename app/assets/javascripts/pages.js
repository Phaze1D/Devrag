

$(document).on('click', '#name-down-arror', function () {
    openName();
    closeLPU();
});

$(document).on('click', '#lpu-down-arror', function () {
    closeName();
    openLPU();
});

$(document).on('click', '#options-image', function () {
    resultToolOptionsClicked(this);
});

$(document).on('click', '#dropdown-sortB', function () {
    dropdownClicked();
});

$(document).on('click', '.m-li', function () {
    mLiClicked($(this));
});

$(document).on('mouseover', '.lpu-li', function () {
    lpuliHover(this)
});

$(document).on('mouseout', '.lpu-li', function () {
    lpuliOut($(this))
});

$(document).on('keypress', '.sinput', function(e) {
    if(e.keyCode === 13) {
        var ul = $(this).closest('.input-div').find('.drop-list');
        if(ul.children().hasClass('hovered')){
            itemClicked(ul.find('.hovered'));
        }else {
            $('#search-form').submit();
        }
    }
});

$(document).on('keypress', '.sainput', function(e) {
    if(e.keyCode === 13) {

        var ul = $(this).closest('.input-div').find('.drop-list');
        if(ul.children().hasClass('hovered')){
            itemClicked(ul.find('.hovered'));
        }else {
            ajaxSearchSubmit();
        }

    }
});

function ajaxSearchSubmit(){
    var form = $('#ajax-search-form');
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function(data){
        console.log(data);
    }).fail(function(data){
        console.log('search faild');
    });
}

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

function removeOptionPop(e) {

    var didClickAny = false;

    $('.option-js').each(function () {
        if (didClickTarget($($(this).closest('#uta')), e) && $(this).closest('#uta').attr('data-ani') == 1) {
            didClickAny = true;
            return 0;
        }
    });

    if (!didClickAny) {
        $('.uta-class').each(function () {
            if ($(this).attr('data-ani') == 1) {
                moveBackTool($(this));
            }
        });
    }

}

function dropdownClicked() {
    var selector = $('#dropdown-sortL');
    selector.css('display', 'block');
    selector.css('opacity', '1');
}

function mLiClicked(selector) {

    var drpB = $('#dropdown-sortB');
    drpB.html(selector.html());

    var sorts = $('#sort-params');
    if(drpB.attr('data-sort') === selector.attr('data-sort')){
        ajaxSort(sorts.attr('data-lang'), sorts.attr('data-plat'), sorts.attr('data-use'), selector.attr('data-sort'), true);
        drpB.attr('data-sort', '-'+selector.attr('data-sort'));
    }else{
        ajaxSort(sorts.attr('data-lang'), sorts.attr('data-plat'), sorts.attr('data-use'), selector.attr('data-sort'), false);
        drpB.attr('data-sort', selector.attr('data-sort'));
    }

    var list = $('#dropdown-sortL');
    list.css('display', 'none');
    list.css('opacity', '0');


}

function ajaxSort(lang, plat, use, sort, by){
    var form = $('#ajax-search-form');
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: {language: lang, platform: plat, use: use, sort: sort, by: by}
    }).done(function(data){
        console.log(data);
    }).fail(function(data){
        console.log('sort faild');
    });
}

function resultToolOptionsClicked(selector) {
    var closetP = $(selector).closest('#uta');

    closetP.find('.search-options-div').css('display', 'block');

    if ($(closetP).attr('data-ani') == 0) {
        closetP.css({
            '-webkit-transform': 'translate(-90%, 0)',
            '-moz-transform': 'translate(-90%, 0)',
            '-ms-transform': 'translate(-90%, 0)',
            '-o-transform': 'translate(-90%, 0)',
            'transform': 'translate(-85%, 0)'
        });
        $(closetP).attr('data-ani', '1');

    } else {
        moveBackTool($(closetP));
    }
}

function moveBackTool(selector) {


    selector.css({
        '-webkit-transform': 'translate(0, 0)',
        '-moz-transform': 'translate(0, 0)',
        '-ms-transform': 'translate(0, 0)',
        '-o-transform': 'translate(0, 0)',
        'transform': 'translate(0, 0)'
    });

    var option_div = selector.find('.search-options-div');
    option_div.animate({
        opacity: 0.99
    }, 500, "linear", function() {
        option_div.css('display', 'none');
    });

    selector.attr('data-ani', '0')
}

function initLPUSeachScroller(){
    $('.lpu-ul').mCustomScrollbar({
        axis:"y",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        scrollInertia: 0,
        theme: "light-thin",
        mouseWheel:{ preventDefault: true }
    });

    $('.mCSB_outside + .mCSB_scrollTools').css('right', '-16px');
}

function lpuliHover(selector) {
    if (selector.scrollWidth > $(selector).innerWidth()) {
        $(selector).closest('.search-options-div').find('.lpu-underlabel').html($(selector).html());
    }
}

function lpuliOut(selector) {
    selector.closest('.search-options-div').find('.lpu-underlabel').html('');
}


function removeSortDropdown(e){
    var list = $('#dropdown-sortL');
    if( !(didClickTarget(list,e) || didClickTarget($('#dropdown-sortB'), e) ) ){
        list.css('opacity', '0');
        list.css('display', 'none');
    }
}
