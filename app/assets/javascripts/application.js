// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).on("page:load ready", function(){
    initLPUSeachScroller();
    initUserAreaScroller();
    initToolLPUScroller();
});

$(document).mouseup(function (e) {
    removeMenu(e);
    removeOptionPop(e);
    removeSortDropdown(e);
});


function removeMenu(e) {
    var container = $("#menu-div");
    if (!didClickTarget(container, e)){
        container.css('opacity', '0');
        container.css('display', 'none');
    }
}

function didClickTarget(container, event) {

    return !(!container.is(event.target) && container.has(event.target).length === 0);
}

function removeSortDropdown(e){
    var list = $('#dropdown-sortL');
   if( !(didClickTarget(list,e) || didClickTarget($('#dropdown-sortB'), e) ) ){
       list.css('opacity', '0');
       list.css('display', 'none');
   }
}