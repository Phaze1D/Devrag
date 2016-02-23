tinymce.PluginManager.add("link",function(e){function t(t){return function(){var n=e.settings.link_list;"string"==typeof n?tinymce.util.XHR.send({url:n,success:function(e){t(tinymce.util.JSON.parse(e))}}):"function"==typeof n?n(t):t(n)}}function n(e,t,n){function r(e,n){return n=n||[],tinymce.each(e,function(e){var i={text:e.text||e.title};e.menu?i.menu=r(e.menu):(i.value=e.value,t&&t(i)),n.push(i)}),n}return r(e,n||[])}function r(t){function r(e){var t=d.find("#text");(!t.value()||e.lastControl&&t.value()==e.lastControl.text())&&t.value(e.control.text()),d.find("#href").value(e.control.value())}function i(t){var n=[];return tinymce.each(e.dom.select("a:not([href])"),function(e){var r=e.name||e.id;r&&n.push({text:r,value:"#"+r,selected:-1!=t.indexOf("#"+r)})}),n.length?(n.unshift({text:"None",value:""}),{name:"anchor",type:"listbox",label:"Anchors",values:n,onselect:r}):void 0}function o(){!u&&0===x.text.length&&f&&this.parent().parent().find("#text")[0].value(this.value())}function a(t){var n=t.meta||{};m&&m.value(e.convertURL(this.value(),"href")),tinymce.each(t.meta,function(e,t){d.find("#"+t).value(e)}),n.text||o.call(this)}function s(e){var t=C.getContent();if(/</.test(t)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(t)||-1==t.indexOf("href=")))return!1;if(e){var n,r=e.childNodes;if(0===r.length)return!1;for(n=r.length-1;n>=0;n--)if(3!=r[n].nodeType)return!1}return!0}var l,c,u,d,f,h,m,p,g,v,y,b,x={},C=e.selection,w=e.dom;l=C.getNode(),c=w.getParent(l,"a[href]"),f=s(),x.text=u=c?c.innerText||c.textContent:C.getContent({format:"text"}),x.href=c?w.getAttrib(c,"href"):"",c?x.target=w.getAttrib(c,"target"):e.settings.default_link_target&&(x.target=e.settings.default_link_target),(b=w.getAttrib(c,"rel"))&&(x.rel=b),(b=w.getAttrib(c,"class"))&&(x["class"]=b),(b=w.getAttrib(c,"title"))&&(x.title=b),f&&(h={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){x.text=this.value()}}),t&&(m={type:"listbox",label:"Link list",values:n(t,function(t){t.value=e.convertURL(t.value||t.url,"href")},[{text:"None",value:""}]),onselect:r,value:e.convertURL(x.href,"href"),onPostRender:function(){m=this}}),e.settings.target_list!==!1&&(e.settings.target_list||(e.settings.target_list=[{text:"None",value:""},{text:"New window",value:"_blank"}]),g={name:"target",type:"listbox",label:"Target",values:n(e.settings.target_list)}),e.settings.rel_list&&(p={name:"rel",type:"listbox",label:"Rel",values:n(e.settings.rel_list)}),e.settings.link_class_list&&(v={name:"class",type:"listbox",label:"Class",values:n(e.settings.link_class_list,function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({inline:"a",classes:[t.value]})})})}),e.settings.link_title!==!1&&(y={name:"title",type:"textbox",label:"Title",value:x.title}),d=e.windowManager.open({title:"Insert link",data:x,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:!0,label:"Url",onchange:a,onkeyup:o},h,y,i(x.href),m,p,g,v],onSubmit:function(t){function n(t,n){var r=e.selection.getRng();tinymce.util.Delay.setEditorTimeout(e,function(){e.windowManager.confirm(t,function(t){e.selection.setRng(r),n(t)})})}function r(){var t={href:i,target:x.target?x.target:null,rel:x.rel?x.rel:null,"class":x["class"]?x["class"]:null,title:x.title?x.title:null};c?(e.focus(),f&&x.text!=u&&("innerText"in c?c.innerText=x.text:c.textContent=x.text),w.setAttribs(c,t),C.select(c),e.undoManager.add()):f?e.insertContent(w.createHTML("a",t,w.encode(x.text))):e.execCommand("mceInsertLink",!1,t)}var i;return x=tinymce.extend(x,t.data),(i=x.href)?i.indexOf("@")>0&&-1==i.indexOf("//")&&-1==i.indexOf("mailto:")?void n("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(e){e&&(i="mailto:"+i),r()}):e.settings.link_assume_external_targets&&!/^\w+:/i.test(i)||!e.settings.link_assume_external_targets&&/^\s*www[\.|\d\.]/i.test(i)?void n("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){e&&(i="http://"+i),r()}):void r():void e.execCommand("unlink")}})}e.addButton("link",{icon:"link",tooltip:"Insert/edit link",shortcut:"Meta+K",onclick:t(r),stateSelector:"a[href]"}),e.addButton("unlink",{icon:"unlink",tooltip:"Remove link",cmd:"unlink",stateSelector:"a[href]"}),e.addShortcut("Meta+K","",t(r)),e.addCommand("mceLink",t(r)),this.showDialog=r,e.addMenuItem("link",{icon:"link",text:"Insert/edit link",shortcut:"Meta+K",onclick:t(r),stateSelector:"a[href]",context:"insert",prependToContext:!0})});
