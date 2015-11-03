function ajaxUsersFollows(page) {
    if ($('#user-area-following').length > 0) {
        $.ajax({
            url: window.location.href + '/follows?page=' + page
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}