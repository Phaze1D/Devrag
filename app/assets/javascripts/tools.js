


$(document).on('click', '#comment-addo', function(){
	showAddComment();
});

$(document).on('click', '#comment-addr', function(){
	cancelComment();
});

$(document).on('click', '#comment-addc', function(){
	addComment();
});

$(document).on('keyup', '.new-lpu-input',function(e){

    if(e.keyCode == 13) {
        createToken($(this));
    }
    if (e.keyCode == 8) {
        console.log('delele');
        deleteToken($(this));
    };
});

function createToken(selector){

    if(selector.val() != ''){
        var inputString = selector.val().trim();
        var ulParent = selector.closest('.new-ul');

        // Check if inputString exist and validate 
        // Check if inputString is already listed

        $( '#'+ulParent.attr('id') + ' li:last').before(createTokenHtml(inputString));
        selector.val('');
    }

}

function deleteToken(selector){

    if (selector.val() == ''){
         var ulParent = selector.closest('.new-ul');
         var li = $('#'+ulParent.attr('id') + ' li:nth-last-child(2)');
         selector.val(li.find('p:first').text());
         li.remove();
    };

}

function createTokenHtml(inputString){
    var safe = htmlSafeInput(inputString);
    return '<li style="margin-right: 5px"> <p class="lpu-token">'+safe+'</p></li>'
}


function showAddComment(){

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

