

function initToolLPUScroller(){
	$('.rain-scroll').mCustomScrollbar({
        axis:"x",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        scrollInertia: 0
    });

    $('.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal').css('bottom', '-16px');
}

