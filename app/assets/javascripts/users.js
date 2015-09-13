
var scrollAt = 0;
var startL = 0;
var endAt = 0;
function mwhileScrolling(object){

    var delta = object.mcs.top - startL + endAt;

    if(delta <= 0 && delta > -45){
        scrollAt = delta;
    }else if (delta > 0){
        scrollAt = 0;
        startL = object.mcs.top;
        endAt = scrollAt;
    }else if(delta < -45){
        scrollAt = -45;
        startL = object.mcs.top;
        endAt = scrollAt;

    }

    console.log(scrollAt + ' --- ' + delta + ' ---- ' + object.mcs.top + ' ------ ' + startL + ' ---- ' + endAt);

    $('#user-tool-search').css({
        '-webkit-transform': 'translate(0,' + scrollAt + 'px)',
        '-moz-transform': 'translate(0,' + scrollAt + 'px)',
        '-ms-transform': 'translate(0,' + scrollAt + 'px)',
        '-o-transform': 'translate(0,' + scrollAt + 'px)',
        'transform': 'translate(0,' + scrollAt + 'px)'
    });
}

function startScroll(startLocation){
   startL = startLocation;
   console.log('Start Called')
}

function endScroll(){
    endAt = scrollAt;
    console.log('End Called');
}

function initUserAreaScroller(){
    $('.user-area').mCustomScrollbar({
        axis:"y",
        scrollbarPosition: "outside",
        autoHideScrollbar: true,
        scrollInertia:0,
        theme: "dark-thin",
        setLeft: "left:-100px",
        callbacks:{
            whileScrolling:function(){
                mwhileScrolling(this);
            },

            onScrollStart: function(){
                startScroll(this.mcs.top)
            },

            onScroll: function(){
                endScroll();
            }
        }
    });

    $('.mCSB_vertical').css('border-radius','10px');

}

