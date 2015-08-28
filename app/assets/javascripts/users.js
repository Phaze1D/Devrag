
var scrollAt = 0;
var startL = 0;
var endAt = 0;
function mwhileScrolling(object){

    var delta = object.mcs.top - startL + endAt;

    if(delta <= 0 && delta > -50){
        scrollAt = delta;
    }else if (delta > 0){
        scrollAt = 0;
        startL = object.mcs.top;
        endAt = scrollAt;
    }else if(delta < -50){
        scrollAt = -50;
        startL = object.mcs.top;
        endAt = scrollAt;

    }

    console.log(scrollAt + ' --- ' + delta + ' ---- ' + object.mcs.top + ' ------ ' + startL + ' ---- ' + endAt);

    $('#tool-search').css({
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

