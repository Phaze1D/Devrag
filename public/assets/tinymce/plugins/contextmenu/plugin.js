tinymce.PluginManager.add("contextmenu",function(e){var t,n=e.settings.contextmenu_never_use_native;e.on("contextmenu",function(r){var i,o=e.getDoc();if(!r.ctrlKey||n){if(r.preventDefault(),tinymce.Env.mac&&tinymce.Env.webkit&&2==r.button&&o.caretRangeFromPoint&&e.selection.setRng(o.caretRangeFromPoint(r.x,r.y)),i=e.settings.contextmenu||"link image inserttable | cell row column deletetable",t)t.show();else{var a=[];tinymce.each(i.split(/[ ,]/),function(t){var n=e.menuItems[t];"|"==t&&(n={text:t}),n&&(n.shortcut="",a.push(n))});for(var s=0;s<a.length;s++)"|"==a[s].text&&(0===s||s==a.length-1)&&a.splice(s,1);t=new tinymce.ui.Menu({items:a,context:"contextmenu",classes:"contextmenu"}).renderTo(),e.on("remove",function(){t.remove(),t=null})}var l={x:r.pageX,y:r.pageY};e.inline||(l=tinymce.DOM.getPos(e.getContentAreaContainer()),l.x+=r.clientX,l.y+=r.clientY),t.moveTo(l.x,l.y)}})});