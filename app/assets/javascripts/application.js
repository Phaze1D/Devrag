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


$(document).on('click', '#header-div',function(){
    menuAnim();
});

function menuAnim(){
    var menu = $('#menu-div');

    if(menu.css('opacity') == '1'){
        menu.css('opacity', '0');
        //menu.css('-webkit-transform:', 'scale(.5)');
        //menu.css('-moz-transform', 'scale(.5)');
        //menu.css('-o-transform', 'scale(.5)');
        //menu.css('transform', 'scale(.5)');


    }else{
        menu.css('opacity', '1');
        //menu.css('-webkit-transform:', 'scale(1)');
        //menu.css('-moz-transform', 'scale(1)');
        //menu.css('-o-transform', 'scale(1)');
        //menu.css('transform', 'scale(1)');
    }
}
