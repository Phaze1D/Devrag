function ajaxUsersFollows(page, remove) {

    var sel = $('#user-area-following');

    if(remove && sel.length > 0){
        sel.find('.uta-class').remove();
    }

    if (sel.length > 0) {
        sel.mCustomScrollbar("disable");

        $.ajax({
            url: window.location.href + '/follows?page=' + page
        }).done(function (data) {
            sel.mCustomScrollbar("update");
        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}