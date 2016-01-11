$(document).on('click', '#comment-addo', function () {
    showAddComment();
});

$(document).on('click', '#comment-addr', function () {
    addComment($(this));
});

$(document).on('click', '#comment-addc', function () {

});

$(document).on('keyup', '.code-area', function(){
    liveInsertCode($(this));
    $(this).focus();
});

$(document).on('click', '.ver-img', function () {
    removeCodeDiv($(this));
    count++;
});

var count = 0;

function removeCodeDiv(imgS){
    imgS.closest('.code-parent').html('');
}

function addCodeDiv(textaS){
    var codep = textaS.closest('.com-code-area').find('.code-parent');

    var options = "";
    var langs = hljs.listLanguages();

    for(var i = 0; i < langs.length; i++){
        options += '<option value="'+ langs[i] + '">'+ langs[i] + '</option>'
    }

    codep.html('<div class="code-div"> <div class="code-header"> <ul> <li> <select name="languaged" id="languaged"><option selected="selected" value="Auto">Auto</option>' + options +
        '</select> </li> <li style="width: 100%"> <div class="ver-img"> </div> </li> </ul> </div> <div class="code-content"> <textarea name="code" id="code" class="code-area"></textarea> </div> </div>')

}

function liveInsertCode(codeS){
    var editorid = codeS.closest('.row').find('.comment-area').attr('id');
    tinymce.get(editorid).dom.remove(editorid+count);
    var select = codeS.closest('.code-div').find('#languaged');

    var codestring = "";
    var codeValue = codeS.val().trim();

    if(codeValue) {

        if (select.val() === "Auto") {
            codestring = hljs.highlightAuto(codeValue).value;
        } else {
            codestring = hljs.highlightAuto(codeValue, [select.val().toLowerCase()]).value;
        }

        var edito = tinymce.get(editorid);

        if (edito.dom.get('pre' + editorid + count) !== null) {
            edito.dom.add('pre' + editorid + count, 'code', {id: editorid + count}, codestring);
        } else {
            insertCode(editorid, codeS, select);
        }
    }else{

        var edito = tinymce.get(editorid);
        if (edito.dom.get('pre' + editorid + count) !== null && edito.dom.isEmpty('pre' + editorid + count)) {
            edito.dom.remove('pre' + editorid + count);
        }

    }
}

function insertCode(editorid, codearea, select) {

    var codestring = "";
    var codeValue = codearea.val().trim();

    if(codeValue) {

        if (select.val() === "Auto") {
            codestring = hljs.highlightAuto(codeValue).value;
        } else {
            codestring = hljs.highlightAuto(codeValue, [select.val().toLowerCase()]).value;
        }

        var string = '<pre id="pre' + editorid + count + '" class="hljs" contenteditable=false style=""> <code id="' + editorid + count + '">' + codestring + '</code> </pre> <br>';
        tinymce.get(editorid).insertContent(string);
    }
}

function showAddComment() {

    var y = 165;
    $('#comment-addo').css('display', 'none');
    $('#add-comment-section').css({
        '-webkit-transform': 'translate(0,' + y + 'px)',
        '-moz-transform': 'translate(0,' + y + 'px)',
        '-ms-transform': 'translate(0,' + y + 'px)',
        '-o-transform': 'translate(0,' + y + 'px)',
        'transform': 'translate(0,' + y + 'px)'
    });

}

function closeAddComment() {
    var y = 0;
    $('#comment-addo').css('display', 'block');
    $('#add-comment-section').css({
        '-webkit-transform': 'translate(0,' + y + 'px)',
        '-moz-transform': 'translate(0,' + y + 'px)',
        '-ms-transform': 'translate(0,' + y + 'px)',
        '-o-transform': 'translate(0,' + y + 'px)',
        'transform': 'translate(0,' + y + 'px)'
    });

}

function cancelComment() {

}

function addComment(button) {
    ajaxCommentAdd(button)
}

function ajaxCommentAdd(button) {

    var form = button.closest('.comment-form');
    var inputsel = button.closest('.comment-form').find('.comment-area');
    var editorid = inputsel.attr('id');
    tinymce.get(editorid).dom.remove(tinymce.get(editorid).dom.select('br'));
    tinymce.get(editorid).save();
    tinymce.get(editorid).setContent('');

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
    }).done(function (data) {
        commentSuccess(inputsel, data);
    }).fail(function (data) {
        if(data.responseJSON) {
            commentFailed(inputsel, data.responseJSON);
        }
    });

}

function commentSuccess(inputsel, data) {
    inputsel.val('');
    var error_div = inputsel.closest('.col-xs-12').find('.error-div');
    error_div.css('display', 'none');
}


function commentFailed(inputsel, data) {
    var error_div = inputsel.closest('.col-xs-12').find('.error-div');

    error_div.css('display', 'block');
    var error_ul = error_div.find('ul');
    error_ul.html('');
    for (var i = 0; i < data['comment'].length; i++) {
        error_ul.append('<li>' + data['comment'][i] + '</li>');
    }
}


function ajaxCommentIndex() {
    if ($('#comment-index').length > 0) {

        $.ajax({
            url: $('#comment-index').attr('data-url')
        }).done(function (data) {

        }).fail(function () {
            console.log('faild')
        }).always(function () {

        });
    }
}
