

$(document).on('focusout', '.reset-input', function(){
    ajaxValidation($('#reset-form'), $(this), ajaxUserSuccess, ajaxResetFailed);
});

$(document).on('focusout', '.user-input-reset', function(){
    ajaxValidation($('#edit-reset-form'), $(this), ajaxUserSuccess, ajaxUserFailed);
});


function ajaxResetFailed(input_selector, data){
    var error_div = input_selector.closest('.error-area').find('.error-div');
    var name = input_selector.attr('name').replace('reset_passwords[', '').replace(']','');

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
