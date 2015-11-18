
function ajaxValidateToken(tokenString, inputSel, size){

    $.ajax({
        url: '/lpu_validation',
        data: { lpu_string: tokenString, size: size }

    }).done(function(){
        lpuSuccess(inputSel);
    }).fail(function(data){
        lpuFailed(inputSel, data);
    });
}

function lpuFailed(inputSel, data){
    inputSel.css('border-color', '#b72927');
}

function lpuSuccess(inputSel){
    var inputString = inputSel.val().trim();
    var typeString = inputSel.attr('name').replace('tool','').replace('[', '').replace(']', '').replace('[name]', '');
    var ulParent = inputSel.closest('.new-ul');


    $('#' + ulParent.attr('id') + ' li:first').after(createTokenHtml(inputString, typeString));
    var liW = parseInt($('#' + ulParent.attr('id') + ' li:eq(1)').css("width"));
    var ulW = parseInt(ulParent.css("width"));
    ulParent.css('width', ulW + liW + 5 + 'px');
    inputSel.val('');
}
