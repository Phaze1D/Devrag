
var ScrollHandler = function( searchBarID, onTotalAjax){
    this.scrollAt = 0;
    this.startL = 0;
    this.endAt = 0;
    this.pageAt = 1;
    this.maxPage = 0;
    this.queryString = '';
    this.searchBarID = searchBarID;
    this.onTotalAjax = onTotalAjax;
}

ScrollHandler.prototype.setScrollArea = function(scrollArea) {
    this.scrollArea = scrollArea;
};

ScrollHandler.prototype.setMaxPage = function(maxPage) {
    this.maxPage = maxPage;
};

ScrollHandler.prototype.setPage = function(page) {
    this.pageAt = page;
};

ScrollHandler.prototype.setQueryString = function(string) {
    this.queryString = string;
};

ScrollHandler.prototype.mwhileScrolling = function() {
    var delta = this.scrollArea.mcs.top - this.startL + this.endAt;

    if(delta <= 0 && delta > -45){
        this.scrollAt = delta;
    }else if (delta > 0){
        this.scrollAt = 0;
        this.startL = this.scrollArea.mcs.top;
        this.endAt = this.scrollAt;
    }else if(delta < -45){
        this.scrollAt = -45;
        this.startL = this.scrollArea.mcs.top;
        this.endAt = this.scrollAt;

    }

    $(this.searchBarID).css({
        '-webkit-transform': 'translate(0,' + this.scrollAt + 'px)',
        '-moz-transform': 'translate(0,' + this.scrollAt + 'px)',
        '-ms-transform': 'translate(0,' + this.scrollAt + 'px)',
        '-o-transform': 'translate(0,' + this.scrollAt + 'px)',
        'transform': 'translate(0,' + this.scrollAt + 'px)'
    });
};

ScrollHandler.prototype.startScroll = function() {
    this.startL = this.scrollArea.mcs.top;
};

ScrollHandler.prototype.endScroll = function() {
    this.endAt = this.scrollAt;
};

ScrollHandler.prototype.onTotalScrollAjax = function(){
    if(this.pageAt < this.maxPage) {
        this.pageAt++;
        this.onTotalAjax(this.pageAt, false, this.queryString);

    }
};


$(document).on('mouseover', '.user-profile-img', function(){
    showEditUserImg();
});

$(document).on('mouseout', '.user-profile-img', function(){
    hideEditUserImg();
});

$(document).on('focusout', '.user-input', function(){
    ajaxValidation($('#user-create-form'), $(this), ajaxUserSuccess, ajaxUserFailed);
});

$(document).on('focusout', '.user-input-edit', function(){
    ajaxValidation($('#user-edit-form'), $(this), ajaxUserSuccess, ajaxUserFailed);
});

$(document).on('change', '.custom-file-input', function(event){
    ajaxAvatarUpload($(this), this.files[0]);
});

function ajaxAvatarUpload(inputsel, file){
    var form = $('#user-edit-form');
    var fd = new FormData();
    fd.append( 'avatar', file );

    var imageDiv = inputsel.closest('.user-profile-img ');
    imageDiv.addClass('spinner');

    $.ajax({
        type: 'POST',
        url: inputsel.attr('data-url'),
        data: fd,
        datatype: 'json',
        processData: false,
        contentType: false
    }).done(function(data){
        ajaxUserSuccess(data)
    }).fail(function(data){
        ajaxUserFailed(inputsel, data.responseJSON)
    }).always(function(){
        imageDiv.removeClass('spinner');
    });
}

function ajaxUserSuccess(data){
    $('.error-div').each(function(){
        $(this).css('display', 'none');
    });
}

function ajaxUserFailed(input_selector, data){
    var error_div = input_selector.closest('.error-area').find('.error-div');
    var name = input_selector.attr('name').replace('user[', '').replace(']','');

    if(data[name]){
        error_div.css('display', 'block');
        var error_ul = error_div.find('ul');
        error_ul.html('');
        for(var i = 0; i < data[name].length; i++){
            error_ul.append('<li>' + data[name][i] + '</li>');
        }
    }else{
        error_div.css('display', 'none');
    }

}

function showEditUserImg(){
    $('.edit-img-div').css('margin-top', '0px');
}

function hideEditUserImg(){
    $('.edit-img-div').css('margin-top', '100px');
}

var followingScroll = new ScrollHandler('#user-fol-search', ajaxUsersFollows);
var toolScroll = new ScrollHandler('#user-tool-search', ajaxUsersTools);

function initUserAreaScroller(){
    initSingleUserScroller('#user-area-tool', toolScroll);
    initSingleUserScroller('#user-area-following', followingScroll);
    $('.mCSB_vertical').css('border-radius','10px');

}

function initSingleUserScroller(scrollerAreaID, scrollerHandler){
    $(scrollerAreaID).mCustomScrollbar({
        axis:"y",
        scrollbarPosition: "inside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        setLeft: "left:-100px",
        scrollInertia: 0,
        callbacks:{

            onInit: function(){
                scrollerHandler.setScrollArea(this);
            },

            whileScrolling:function(){
                scrollerHandler.mwhileScrolling();

            },

            onScrollStart: function(){
                scrollerHandler.startScroll();
            },

            onScroll: function(){
                scrollerHandler.endScroll();
            },

            onTotalScroll: function(){

                scrollerHandler.onTotalScrollAjax();

            }
        },
        mouseWheel:{ preventDefault: true }


    });

    $(scrollerAreaID).find('.mCSB_container').css('margin-right', '0px');
}
