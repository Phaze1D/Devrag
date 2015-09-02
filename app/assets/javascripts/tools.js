


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
	$('#comment-addo').css('display', 'none');
	$("#add-comment-section").animate({
		marginTop: '0px'}
	);
}

function closeAddComment(){
	$("#add-comment-section").animate({
		marginTop: '-170px'}, function(){
			$('#comment-addo').css('display', 'block');
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

