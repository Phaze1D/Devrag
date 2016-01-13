
$(document).on('click', '.report-b', function(){
    ajaxShowReport($(this));
});

$(document).on('click', '.cancel-report', function(){
    removeReportForm();
});

$(document).on('focusout', '.report-area', function(){
    var form = $(this).closest('.report-form');

    console.log(form);

    ajaxValidation(form, $(this), formSuccess, formFailed)
});


function ajaxShowReport(reportB){
    $.ajax({
        type: 'GET',
        url: reportB.attr('data-url')
    }).done(function(){
        showReportForm();
    }).fail(function(data){

    });
}

function formSuccess(){
    $('.error-div').each(function(){
        $(this).css('display', 'none');
    });
}

function formFailed(input_selector, data){
    var error_div = input_selector.closest('.error-area').find('.error-div');
    var name = input_selector.attr('name').replace('report[', '').replace(']','');

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

function showReportForm(){
    $('.report-background').css('display', 'block');
}

function removeReportForm(){
    $('#report-div').html('');
    $('.report-background').css('display', 'none');
}
