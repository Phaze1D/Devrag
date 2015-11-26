
$(document).on('click', '.follow-b-form', function(e){
    ajaxCreateRelationship($(this));
    e.preventDefault();
});

function ajaxCreateRelationship(button){

    var form = button.closest('.relation-from');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function(data){

    }).fail(function(data){

    });
}