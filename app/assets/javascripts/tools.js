


$(document).on('click', '#comment-addo', function(){
	showAddComment();
});

$(document).on('click', '#comment-addr', function(){
	cancelComment();
});

$(document).on('click', '#comment-addc', function(){
	addComment();
});


function showAddComment(){
	// $('#comment-addo').css('display', 'none');
	// $("#add-comment-section").animate({
	// 	marginTop: '0px'}, 200, "linear"
	// );

	var y = 165;
	$('#comment-addo').css('display', 'none');
	$('#add-comment-section').css({
        '-webkit-transform': 'translate(0,' + y + 'px)',
        '-moz-transform': 'translate(0,' + y + 'px)',
        '-ms-transform': 'translate(0,' + y + 'px)',
        '-o-transform': 'translate(0,' + y + 'px)',
        'transform': 'translate(0,' + y + 'px)'
    });
}

function closeAddComment(){
	var y = 0;
	$('#comment-addo').css('display', 'block');
	$('#add-comment-section').css({
        '-webkit-transform': 'translate(0,' + y + 'px)',
        '-moz-transform': 'translate(0,' + y + 'px)',
        '-ms-transform': 'translate(0,' + y + 'px)',
        '-o-transform': 'translate(0,' + y + 'px)',
        'transform': 'translate(0,' + y + 'px)'
    });
}

function cancelComment(){
	closeAddComment();
}

function addComment(){
	closeAddComment();
}

function initToolLPUScroller(){
	$('.rain-scroll').mCustomScrollbar({
        axis:"x",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        alwaysShowScrollbar: 0,
        scrollInertia: 0
    });

    $('.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal').css('bottom', '-16px');
}

