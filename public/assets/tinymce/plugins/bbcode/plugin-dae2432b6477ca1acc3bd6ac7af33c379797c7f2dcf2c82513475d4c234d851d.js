!function(){tinymce.create("tinymce.plugins.BBCodePlugin",{init:function(e){var t=this,n=e.getParam("bbcode_dialect","punbb").toLowerCase();e.on("beforeSetContent",function(e){e.content=t["_"+n+"_bbcode2html"](e.content)}),e.on("postProcess",function(e){e.set&&(e.content=t["_"+n+"_bbcode2html"](e.content)),e.get&&(e.content=t["_"+n+"_html2bbcode"](e.content))})},getInfo:function(){return{longname:"BBCode Plugin",author:"Ephox Corp",authorurl:"http://www.tinymce.com",infourl:"http://www.tinymce.com/wiki.php/Plugin:bbcode"}},_punbb_html2bbcode:function(e){function t(t,n){e=e.replace(t,n)}return e=tinymce.trim(e),t(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi,"[url=$1]$2[/url]"),t(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),t(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),t(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),t(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),t(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi,"[color=$1]$2[/color]"),t(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[color=$1]$2[/color]"),t(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi,"[size=$1]$2[/size]"),t(/<font>(.*?)<\/font>/gi,"$1"),t(/<img.*?src=\"(.*?)\".*?\/>/gi,"[img]$1[/img]"),t(/<span class=\"codeStyle\">(.*?)<\/span>/gi,"[code]$1[/code]"),t(/<span class=\"quoteStyle\">(.*?)<\/span>/gi,"[quote]$1[/quote]"),t(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi,"[code][b]$1[/b][/code]"),t(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi,"[quote][b]$1[/b][/quote]"),t(/<em class=\"codeStyle\">(.*?)<\/em>/gi,"[code][i]$1[/i][/code]"),t(/<em class=\"quoteStyle\">(.*?)<\/em>/gi,"[quote][i]$1[/i][/quote]"),t(/<u class=\"codeStyle\">(.*?)<\/u>/gi,"[code][u]$1[/u][/code]"),t(/<u class=\"quoteStyle\">(.*?)<\/u>/gi,"[quote][u]$1[/u][/quote]"),t(/<\/(strong|b)>/gi,"[/b]"),t(/<(strong|b)>/gi,"[b]"),t(/<\/(em|i)>/gi,"[/i]"),t(/<(em|i)>/gi,"[i]"),t(/<\/u>/gi,"[/u]"),t(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi,"[u]$1[/u]"),t(/<u>/gi,"[u]"),t(/<blockquote[^>]*>/gi,"[quote]"),t(/<\/blockquote>/gi,"[/quote]"),t(/<br \/>/gi,"\n"),t(/<br\/>/gi,"\n"),t(/<br>/gi,"\n"),t(/<p>/gi,""),t(/<\/p>/gi,"\n"),t(/&nbsp;|\u00a0/gi," "),t(/&quot;/gi,'"'),t(/&lt;/gi,"<"),t(/&gt;/gi,">"),t(/&amp;/gi,"&"),e},_punbb_bbcode2html:function(e){function t(t,n){e=e.replace(t,n)}return e=tinymce.trim(e),t(/\n/gi,"<br />"),t(/\[b\]/gi,"<strong>"),t(/\[\/b\]/gi,"</strong>"),t(/\[i\]/gi,"<em>"),t(/\[\/i\]/gi,"</em>"),t(/\[u\]/gi,"<u>"),t(/\[\/u\]/gi,"</u>"),t(/\[url=([^\]]+)\](.*?)\[\/url\]/gi,'<a href="$1">$2</a>'),t(/\[url\](.*?)\[\/url\]/gi,'<a href="$1">$1</a>'),t(/\[img\](.*?)\[\/img\]/gi,'<img src="$1" />'),t(/\[color=(.*?)\](.*?)\[\/color\]/gi,'<font color="$1">$2</font>'),t(/\[code\](.*?)\[\/code\]/gi,'<span class="codeStyle">$1</span>&nbsp;'),t(/\[quote.*?\](.*?)\[\/quote\]/gi,'<span class="quoteStyle">$1</span>&nbsp;'),e}}),tinymce.PluginManager.add("bbcode",tinymce.plugins.BBCodePlugin)}();
