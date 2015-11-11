
var ScrollHandler = function( searchBarID, onTotalAjax){
    this.scrollAt = 0;
    this.startL = 0;
    this.endAt = 0;
    this.pageAt = 1;
    this.searchBarID = searchBarID;
    this.onTotalAjax = onTotalAjax;
}

ScrollHandler.prototype.setScrollArea = function(scrollArea) {
    this.scrollArea = scrollArea;
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
    this.pageAt++;
    this.onTotalAjax(this.pageAt);
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

function ajaxUserSuccess(){
    $('.error-div').each(function(){
        $(this).css('display', 'none');
    });
}

function ajaxUserFailed(input_selector, data){
    var error_div = input_selector.closest('.col-md-12').find('.error-div');
    var name = input_selector.attr('name').replace('user[', '').replace(']','');

    console.log(error_div);

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

var toolScroll = new ScrollHandler('#user-tool-search', ajaxUsersTools);
var followingScroll = new ScrollHandler('#user-fol-search', ajaxUsersFollows);

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


