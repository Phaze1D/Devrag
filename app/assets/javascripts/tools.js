


$(document).on('click', '#comment-addo', function(){
	showAddComment();
});

$(document).on('click', '#comment-addr', function(){
	cancelComment();
});

$(document).on('click', '#comment-addc', function(){
	addComment();
});

$(document).on('keydown', '.new-lpu-input',function(e){

    if(e.keyCode == 13) {
        createToken($(this));
    }
    if (e.keyCode == 8) {
        deleteToken($(this));
    };
});

function createToken(selector){

    if(selector.val() != ''){
        var inputString = selector.val().trim();
        var ulParent = selector.closest('.new-ul');

        // Check if inputString exist and validate 
        // Check if inputString is already listed

        $( '#'+ulParent.attr('id') + ' li:first').after(createTokenHtml(inputString));
        var liW = parseInt($( '#'+ulParent.attr('id') + ' li:eq(1)').css("width"));
        var ulW = parseInt(ulParent.css("width"));
        ulParent.css('width', ulW+liW+5+'px');
        selector.val('');
    }

}

function deleteToken(selector){

    var ulParent = selector.closest('.new-ul');
    var li = $('#'+ulParent.attr('id') + ' li:eq(1)');

    if (!li.hasClass("input-lpu") && selector.val() == ''){
         selector.val(li.find('p:first').text());
         var liW = parseInt(li.css("width"));
         var ulW = parseInt(ulParent.css("width"));
         ulParent.css('width', ulW-liW-5+'px');
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
 

    $('.new-rain').mCustomScrollbar({
        axis:"x",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        scrollInertia: 0,
        advanced:{ updateOnSelectorChange: ".new-ul" }
    });

    $('.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal').css('bottom', '-16px');
    $('#mCSB_1').css('border-radius','20px');
}

