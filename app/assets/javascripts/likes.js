
$(document).on('click', '.like-image', function () {
    ajaxLike($(this));
});

// Return the amount of likes to refresh the number
function ajaxLike(button){
    var form = button.closest('.like-from');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function(data){
        ajaxUsersFollows(1, true);
        ajaxUsersTools(1, true);
    }).fail(function(data){

    });
}
