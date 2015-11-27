
$(document).on('click', '.follow-b-form', function(e){
    ajaxCreateRelationship($(this));
    e.preventDefault();
});

$(document).on('click', '.unfollow-b-form', function(e){
    ajaxDeleteRelationship($(this));
    e.preventDefault();
});

function ajaxDeleteRelationship(button){
    var form = button.closest('.relation-from');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function(data){

    }).fail(function(data){

    });
}

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