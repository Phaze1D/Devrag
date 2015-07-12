
/**
 * Handles the down arror click animation
 */
$(document).on('click','#down-arror', function(){
    $(this).fadeOut('fast');
    $('#name-title').removeClass('title-2-dead').addClass('title-2-alive underline-alive');
    $('#name-hidden-box').animate({
        'margin-top': '100px'
    },'fast','linear', function () {
        $('#name-hidden-box').fadeOut('fast');
    });
});



/*
    Make function for name animation show and remove, and other function for
    LPU animation show and remove (DRY clean code)
 */