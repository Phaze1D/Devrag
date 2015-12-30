
$(document).on('keyup', '#user-follows-query', function(){
    setFollowsQueryString($(this).val());
});

$(document).on('submit', '#search-user-follows-form', function(e){
    e.preventDefault();
});

function setFollowsQueryString(string){
    followingScroll.setQueryString(string);
    followingScroll.setPage(1);
    followingScroll.onTotalAjax(1, true, string)
}


function ajaxUsersFollows(page, remove, query) {

    var sel = $('#user-area-following');


    if (sel.length > 0) {

        if(remove){
            sel.find('.uta-class').remove();
        }
        sel.mCustomScrollbar("disable");

        $.ajax({
            url: window.location.href + '/follows?page='  + page + '&query=' + query
        }).done(function (data) {
            sel.mCustomScrollbar("update");
        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}