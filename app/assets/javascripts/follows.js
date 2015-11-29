function ajaxUsersFollows(page, remove) {

    var sel = $('#user-area-following');

    if(remove && sel.length > 0){
        sel.find('.uta-class').remove();
    }

    if (sel.length > 0) {
        $.ajax({
            url: window.location.href + '/follows?page=' + page
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}