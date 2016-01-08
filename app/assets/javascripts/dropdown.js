

$(document).on('mouseover', '.drop-list-item', function () {
    mouseOver($(this));
});

$(document).on('mouseout', '.drop-list-item', function () {
    mouseOut($(this));
    onli = -1;
});

$(document).on('click', '.drop-list-item', function(){
    itemClicked($(this));

});

$(document).on('keyup', '.sinput', function(e){
    navArrow(e, $(this).closest('.input-div').find('.drop-list'));
    if(e.keyCode !== 13) {
        if (e.keyCode !== 40 && e.keyCode !== 38) {
            ajaxRetriveLPUData($(this));
        }
    }else{
        removeList($(this));
    }
});

$(document).on('keyup', '.sainput', function(e){
    navArrow(e, $(this).closest('.input-div').find('.drop-list'));
    if(e.keyCode !== 13) {
        if (e.keyCode !== 40 && e.keyCode !== 38) {
            ajaxRetriveLPUData($(this));
        }
    }else{
        removeList($(this));
    }
});

$(document).on('focusout', '.sinput', function(){
    var a = $(this);
    window.setTimeout(function(){
        removeList(a);
        }, 150
    );
});

$(document).on('focusout', '.sainput', function(){
    var a = $(this);
    window.setTimeout(function(){
            removeList(a);
        }, 150
    );
});

function removeList(selItem){
    var ul = selItem.closest('.input-div').find('.drop-list');
    ul.html('');
}

function ajaxRetriveLPUData(selInput){

    onli = -1;
    $.ajax({
        url: '/auto_completion',
        type: 'POST',
        data: {name: selInput.attr('name'), value: selInput.val()}
    }).done(function (data) {
        var ul = selInput.closest('.input-div').find('.drop-list');
        ul.html('');
        addItems(ul, data)
    }).fail(function () {

    }).always(function () {

    });
}

function addItems(selDL, array){
    for(var i = 0; i < array.length; i++){
        selDL.append('<li class="drop-list-item">' + array[i]['name'] + '</li>');
    }
}

function itemClicked(selItem){
    var input = selItem.closest('.input-div').find('.form-input');
    input.val(selItem.text());

    input.focus();
    selItem.closest('.drop-list').html('');
}

function mouseOver(selItem){
    $('li.hovered').removeClass('hovered');
    selItem.addClass('hovered');
    onli = selItem.index();
}

function mouseOut(selItem){
    selItem.removeClass('hovered');
}

var onli = -1;

function navArrow(e, selList) {

    var list = [];

    selList.find('li').each(function () {
        list.push($(this));
    });

    if (list.length > 0) {
        if (e.keyCode === 40) {           //Down

            onli++;

            if (onli < list.length && onli - 1 >= 0 && $(list[onli - 1]).hasClass('hovered')) {
                $(list[onli - 1]).removeClass('hovered');
            }

            if (onli < list.length) {

                $(list[onli]).addClass('hovered');
            } else {
                onli--;
            }
        } else if (e.keyCode === 38) {     //Up

            onli--;
            if (onli >= 0 && onli + 1 < list.length && $(list[onli + 1]).hasClass('hovered')) {
                $(list[onli + 1]).removeClass('hovered');
            }

            if (onli >= 0) {
                $(list[onli]).addClass('hovered');
            } else {
                onli++;
            }
        }
    }
}