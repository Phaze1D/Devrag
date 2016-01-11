$(document).on('click', '.notify-link', function (e) {

    ajaxCreateToolNotify($(this));
    e.preventDefault();
});

$(document).on('click', '#cancel-noti', function () {
    cancelNoti();

});

$(document).on('click', '#add-tell', function () {
    ajaxCreateTell();
});


function initTellIndexScroll(){
    $('#tells-area-div').mCustomScrollbar({
        axis: "y",
        scrollbarPosition: "inside",
        autoHideScrollbar: true,
        theme: "dark-thin",
        scrollInertia: 0,
        mouseWheel: {preventDefault: true}
    });
}

function ajaxTellsIndex(){
    if ($('#tells-index').length > 0) {

        $.ajax({
            url: $('#tells-index').attr('data-url')
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}

function cancelNoti() {

    var htmlBody = $('html, body');
    htmlBody.animate({
        scrollTop: htmlBody.offset().top
    }, 500, function () {
        $('#notify-sect').html(' ');
    });

}

function ajaxCreateTell(){
    var form = $('#tell-form');
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        dataType: 'json'
    }).done(function(){
        tellSuccess();
    }).fail(function(data){
        if(data.responseJSON) {
            tellFailed(data.responseJSON);
        }
    });
}

function tellFailed(data) {
    var error_div = $('#tell-form').closest('.row').find('.error-div');

    error_div.css('display', 'block');
    var error_ul = error_div.find('ul');
    error_ul.html('');
    for (var i = 0; i < data['description'].length; i++) {
        error_ul.append('<li>' + data['description'][i] + '</li>');
    }
}

function tellSuccess(){
    $('.tell-success').css('display', 'block');
    cancelNoti();
}

function ajaxCreateToolNotify(atag) {
    $.ajax({
        url: atag.attr('href')
    }).done(function (data) {

    }).fail(function () {
        console.log('fail');
    }).always(function () {
        console.log('always');
    });
}