
function ajaxGithubIndex(){
    var gitdiv = $('#github-repos');
    if (gitdiv.length > 0) {
        $.ajax({
            url: gitdiv.attr('data-url')
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });

    }
}