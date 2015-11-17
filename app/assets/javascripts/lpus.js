
function ajaxValidateToken(tokenString, inputSel){

    $.ajax({
        url: '/lpu_validation',
        data: { lpu_string: tokenString }

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
    var ulParent = inputSel.closest('.new-ul');
    $('#' + ulParent.attr('id') + ' li:first').after(createTokenHtml(inputString));
    var liW = parseInt($('#' + ulParent.attr('id') + ' li:eq(1)').css("width"));
    var ulW = parseInt(ulParent.css("width"));
    ulParent.css('width', ulW + liW + 5 + 'px');
    inputSel.val('');
}
