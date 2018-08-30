!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

function ftg_getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
  }

  //credits James Padolsey http://james.padolsey.com/
  var qualifyURL = function (url) {
      var img = document.createElement('img');
      img.src = url; // set string url
      url = img.src; // get qualified url
      img.src = null; // no server request
      return url;
  };

  (function ($, window, document, undefined) {

      $.fn.visible = function (partial) {

          if (!$(this).offset())
              return true;

          var $t = $(this),
              $w = $(window),
              viewTop = $w.scrollTop(),
              viewBottom = viewTop + $w.height(),
              _top = $t.offset().top,
              _bottom = _top + $t.height(),
              compareTop = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;

          return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

      };

      var pluginName = "finalTilesGallery",
          defaults = {
              layout: 'columns', // final | columns
              columns: [
                  [4000, 3],
                  [1024, 3],
                  [800, 3],
                  [480, 2],
                  [320, 1]
              ],
              rowHeight: 200,
              margin: 10,
              minTileWidth: 200,
              ignoreImageAttributes: true,
              imageSizeFactor: [
                  [4000, .9],
                  [1024, .8],
                  [800, .7],
                  [600, .6],
                  [480, .5],
                  [320, .3]
              ],
              gridSize: 10,
              allowEnlargement: true,
              autoLoadURL: null,
              autoLoadOffset: 50,
              selectedFilter: '',
              onComplete: function () {},
              onUpdate: function () {},
              debug: false
          };

      // The actual plugin constructor
      function Plugin(element, options) {

          /*! properties */
          this.element = element;
          this.$element = $(element);
          this.settings = $.extend({}, defaults, options);
          this._columnSize = 0;
          this._defaults = defaults;
          this._name = pluginName;
          this.tiles = [];
          this._loadedImages = 0;
          this._rows = [[]];
          this._currentRow = 0;
          this._currentRowTile = 0;
          this.edges = [];
          this.imagesData = {};
          this.currentWidth = 0;
          this.currentImageSizeFactor = 1;
          this.currentColumnsCount = 0;
          this.ajaxComplete = false;
          this.isLoading = false;
          this.currentPage = 1;
          this.init();
      }

      // Avoid Plugin.prototype conflicts
      $.extend(Plugin.prototype, {
          print : function (text) {
              if(this.settings.debug)
                  console.log(text);
          },
          setCurrentImageSizeFactor : function () {
              this.currentImageSizeFactor = 1;
              var ww = $(window).width();
              for (var i = 0; i < this.settings.imageSizeFactor.length; i++) {
                  if (this.settings.imageSizeFactor[i][0] >= ww)
                      this.currentImageSizeFactor = this.settings.imageSizeFactor[i][1];
              }
              if(!this.currentImageSizeFactor)
                  this.currentImageSizeFactor = 1;
              this.print("current image size factor: " + this.currentImageSizeFactor + " (" + ww + ")");
          },
          setCurrentColumnSize: function () {

              var ww = $(window).width();
              for (var i = 0; i < this.settings.columns.length; i++) {
                  if (this.settings.columns[i][0] >= ww)
                      this.currentColumnsCount = this.settings.columns[i][1];
              }

              this._columnSize = Math.floor((this.currentWidth - (this.settings.margin * (this.currentColumnsCount - 1))) / this.currentColumnsCount);

              console.log(this.currentWidth, this._columnSize, this.currentColumnsCount);
              this.print(this.currentWidth, this._columnSize);
          },
          init: function () {
              var instance = this;
              var current_filter = this.settings.selectedFilter;
              var filter_url = ftg_getURLParameter('ftg-set');
                  if(filter_url)
                      current_filter = filter_url;

              instance.currentWidth = instance.$element.width();

              if(instance.$element.filter(":visible").length == 0) {
                  instance.print('cannot initialize the gallery, container is hidden. Retrying in 500ms.');
                  setTimeout(function () {
                      instance.init();
                  }, 500);
                  return;
              }

              this.$element.find(".ftg-items").css({
                  position: 'relative'
              });

              var current_filter = this.settings.selectedFilter;
              var filter_url = ftg_getURLParameter('ftg-set');
                  if(filter_url)
                      current_filter = filter_url;

              var instance = this;

              if(current_filter != null)
              {
                  instance.print(".. found filter (" + current_filter + ")");
                  instance.$element.find(".ftg-filters a").removeClass('selected');
                  instance.$element.find(".ftg-filters a").each(function(){

                      if($(this).data('filter') == current_filter)
                      {
                          instance.print(".. selecting filter");
                          $(this).addClass('selected');
                      }
                  })
              }

              var hash = window.location.hash;

              this.$element.find(".ftg-items").css({
                  position: 'relative',
                  minWidth: instance.settings.minTileWidth
              });

              if((hash && hash != "#ftg-set-ftgall" && hash.substr(0, 8) == '#ftg-set') ||
                      instance.settings.selectedFilter)
              {
                  var ft = '#ftg-set-' + instance.settings.selectedFilter;
                  if(hash)
                      ft = hash;

                  var hash_class = ft.replace('#','.');
                  var filters = [];

                   instance.$element.find(".ftg-filters a").each(function(){
                      filters.push($(this).attr('href'));
                   });

                   if($.inArray(ft, filters) >= 0)
                   {
                     hash_class = hash_class.substring(1);

                      instance.$element.find(".ftg-filters a").each(function(){

                         if($(this).attr('href') != ft){

                           instance.$element.find('.item').each(function(){
                              var img = $(this).parent().parent();

                              if(img.hasClass(hash_class) == false)
                              {
                                  img.addClass('ftg-hidden');
                              }
                           })


                           $(this).removeClass('selected');
                           };
                       });

                       $('a[href="' + ft + '"]').addClass('selected');
                  }
              }

              this.tiles = this.$element.find('.tile').not('.ftg-hidden');

              this.tiles.css({
                  transition: 'all .3s'
              });
              this.currentWidth = this.$element.width();
              this.print("this.currentWidth: " + this.currentWidth);

              if(instance.$element.filter(":visible").length == 0) {
                  instance.warn('cannot initialize the gallery, container is hidden. Retrying in 500ms.');
                  setTimeout(function () {
                      instance.init();
                  }, 500);
                  return;
              }

              if(this.settings.layout != 'columns' && this.settings.layout != 'rows' &&
                  this.settings.layout != 'final') {
                      console.log("WARNING: unknown layout, falling back to 'final'.")
                  }

              if(this.settings.layout == 'columns') {
                  this.setCurrentColumnSize();
              }

              var _resizeTo = 0;
              this.setCurrentImageSizeFactor();
              $(window).resize(function () {
                  _resizeTo = setTimeout(function () {
                      if (instance.currentWidth != instance.$element.width()) {
                          clearTimeout(_resizeTo);
                          instance.print("this.currentWidth", this.currentWidth);
                          instance.currentWidth = instance.$element.width();
                          instance.setCurrentColumnSize();
                          instance.setCurrentImageSizeFactor();
                          instance.refresh();
                      }
                  }, 500);
              });

              instance.isLoading = true;
              if(instance.settings.autoLoadURL) {
                  $(window).scroll(function () {
                      if(!instance.ajaxComplete && !instance.isLoading) {
                          if ($(window).scrollTop() >= $(document).height() - $(window).height() - instance.settings.autoLoadOffset) {
                              instance.isLoading = true;
                              $.get(instance.settings.autoLoadURL, { page: ++instance.currentPage }, function (html) {
                                  if ($.trim(html).length == 0) {
                                      instance.ajaxComplete = true;
                                  } else {
                                      instance.$element.find(".ftg-items").append(html);
                                      instance.tiles = instance.$element.find('.tile')
                                      instance.loadImage();
                                  }
                              });
                          }
                      }
                  });
              }

              this.setupFilters();
              this.edges.push({ left: 0, top: 0, width: this.currentWidth, index: 0 });
              this.loadImage();
          },
          addElements: function (html) {
              this.$element.find(".ftg-items").append(html);
              this.tiles = this.$element.find('.tile')
              this.loadImage();
          },
          removeAt: function(index) {
              this.tiles[index].remove();
              this.refresh();
          },
          clear: function() {
              this.$element.find(".ftg-items").height(0).empty();
              this.refresh();
          },
          setupFilters: function() {
              var instance = this;
              instance.$element.find(".ftg-filters a").click(function(e) {
                  e.preventDefault();

                  instance.$element.find(".ftg-filters a").removeClass("selected");
                  $(this).addClass("selected");

                  var ft = $(this).attr("href").replace("#ftg-set-", "");
                  if(ft == "ftgall") {
                      instance.$element.find(".tile").removeClass("ftg-hidden");
                  } else {
                      instance.$element
                                  .find(".tile")
                                  .not(".ftg-set-" + ft)
                                  .addClass("ftg-hidden")
                                  .end()
                                  .filter(".ftg-set-" + ft)
                                  .removeClass("ftg-hidden");
                  }
                  instance.refresh();
              });
          },
          printEdges: function () {
              this.$element.find(".edge").remove();
              for (i = 0; i < this.edges.length; i++) {
                  var $e = $("<div class='edge' />");
                  $e.append("top: " + this.edges[i].top + "<br>");
                  $e.append("left: " + this.edges[i].left + "<br>");
                  $e.append("width: " + this.edges[i].width + "<br>");
                  $e.css({
                      left: this.edges[i].left,
                      top: this.edges[i].top,
                      marginTop: -25,
                      marginLeft: 20
                  });
                  this.$element.append($e);
              }
          },
          printEdge: function (edge) {
              var $e = $("<div class='edge enlarged-"+edge.enlarged+"' />");
              $e.append("<b>"+ edge.index + " " + edge.case + "</b><br>");
              $e.append("t: " + Math.round(edge.top) + " l: " + edge.left + "<br>");
              $e.append("width: " + edge.width + "<br>");
              $e.append("idx: " + edge.tileIndex + "<br>");

              $e.css({
                  left: edge.left,
                  top: edge.top,
                  marginTop: -25,
                  marginLeft: 20
              });
              this.$element.append($e);
          },
          refresh: function () {
              this.$element.find(".edge").remove();
              this.edges = [
                  { left: 0, top: 0, width: this.currentWidth }
              ];
              this.tiles.removeClass("ftg-loaded ftg-enlarged");
              this.tiles = this.$element.find('.tile').not('.ftg-hidden');
              this._loadedImages = 0;
              this.loadImage();
          },

          getAvailableRowSpace: function () {
              return this.currentWidth - this.getBusyRowSpace();
          },

          getBusyRowSpace: function () {
              var space = 0;
              for(var i=0; i<this._rows[this._currentRow].length; i++) {
                  space += this._rows[this._currentRow][i].data('width') +
                              this.settings.margin;
              }
              return space;
          },

          addImageToRow: function($img) {
              console.log(this._rows);
              console.log(this._currentRow);
              this._rows[this._currentRow].push($img);
          },

          fitImagesInRow: function () {
              var left = this.getAvailableRowSpace() - this.settings.margin;
              var ratio = (this.currentWidth - (this._rows[this._currentRow].length - 1) * this.settings.margin) / this.getBusyRowSpace();

              for(var i=0; i<this._rows[this._currentRow].length; i++) {
                  $item = this._rows[this._currentRow][i];
                  var w = $item.data('width');
                  var h = $item.data('height');

                  $item.data('width', w * ratio);
                  this.add(this._currentRowTile++);
              }
          },

          nextTile : function (add) {
              var instance = this;
              if(add)
                  instance.add(instance._loadedImages);

              if (++instance._loadedImages < instance.tiles.length) {
                  instance.loadImage();
              } else {
                  var height = instance.lowerEdgeTop();
                  instance.print("lower edge top: " + height);
                  instance.$element.find(".ftg-items").height(height);
                  instance.isLoading = false;
                  instance.settings.onComplete();
              }
          },

          /*! loadImage */
          loadImage: function () {
              var instance = this;
              var $tile = this.tiles.eq(this._loadedImages);

              if($tile.children("iframe").length)
                  $tile.children("iframe").addClass("item");

              var $item = $tile.find('.item');

              switch ($item.get(0).tagName.toLowerCase()) {
                  case "img":
                      var img = new Image();
                      img.onload = function () {
                          var iFactor = instance.currentImageSizeFactor;
                          if ($tile.data("ftg-ignore-size-factor"))
                              iFactor = 1;

                          var size = {};
                          var addImage = true;
                          if(instance.settings.layout == "final") {
                              var w = $item.attr("width") ? parseInt($item.attr("width")) : img.width;
                              var h = $item.attr("height") ? parseInt($item.attr("height")) : img.height;

                              size.width = w * iFactor;
                              size.height = h * iFactor;
                          }
                          if(instance.settings.layout == "columns") {
                              size.width = instance._columnSize;
                              size.height = (size.width * img.height) / img.width;
                          }
                          //WIP rows layout not yet available
                          if(instance.settings.layout == "rows") {
                              size.width = (instance.settings.rowHeight * img.width) / img.height;
                              size.height = instance.settings.rowHeight;
                              addImage = false;

                              if(instance.getAvailableRowSpace() > size.width) {
                                  instance.addImageToRow($item);
                              } else {
                                  //not enough available space, make a new row
                                  //and print the current one
                                  instance.fitImagesInRow();
                                  instance._currentRow++;
                                  instance._rows.push([]);
                                  instance.addImageToRow($item);
                              }
                          }

                          $item.attr("src", this.src);

                          instance.imagesData["tile" + instance._loadedImages] = {
                              width: size.width,
                              height: size.height,
                              owidth: img.width,
                              oheight: img.height,
                              src: img.src
                          };

                          instance.nextTile(addImage);
                      }
                      img.onerror = function() {
                          instance.print("error loading image: " + img.src);
                          instance.nextTile(true);
                      }
                      img.src = $item.data("src");
                      $tile.data("ftg-type", "image");
                      break;
                  case "iframe":
                      instance.imagesData["tile" + instance._loadedImages] = {
                          width: parseInt($item.attr("width")),
                          height: parseInt($item.attr("height")),
                          owidth: parseInt($item.attr("width")),
                          oheight: parseInt($item.attr("height"))
                      };
                      $tile.data("ftg-type", "iframe");
                      instance.nextTile(true);
                      break;
                  default:
                      instance.imagesData["tile" + instance._loadedImages] = {
                          width: parseInt($item.data("width")),
                          height: parseInt($item.data("height")),
                          owidth: parseInt($item.data("width")),
                          oheight: parseInt($item.data("height"))
                      };
                      instance.nextTile(true);
                      break;
              }
          },
          higherEdge: function () {
              var left = 0;
              var _top = 100000;
              var _left = 0;
              var found = 0;

              for (var i = 0; i < this.edges.length; i++) {
                  if (this.edges[i].top < _top) {
                      found = i;
                      _top = this.edges[i].top;
                  }
              }

              return this.edges[found];
          },
          lowerEdgeTop: function () {
              var min = 0;
              for (var i = 0; i < this.edges.length; i++) {
                  if (this.edges[i].top > min) {
                      min = this.edges[i].top;
                  }
              }

              return min;
          },
          alignEdge: function (edge, index) {
              //look left
              for (var i = 0; i < this.edges.length; i++) {
                  if (this.edges[i].left + this.edges[i].width + this.settings.margin == edge.left) {
                      this.print("found edge on left", i);
                      //adjust edge
                      if (edge.top == this.edges[i].top) {
                          this.print("edges can be aligned [1]");
                          return { side: 'left', edge: this.edges[i] };
                      }
                  }
              }
              //TODO look right
              for (var i = 0; i < this.edges.length; i++) {
                  if (this.edges[i].left - this.settings.margin == edge.left + edge.width) {
                      this.print("found edge on right", i);
                      //adjust edge
                      if (edge.top == this.edges[i].top) {
                          this.print("edges can be aligned [2]");
                          return { side: 'right', edge: this.edges[i] };
                      }
                  }
              }

              return null;
          },
          removeEdge: function (edge) {
              var tmp = [];
              for (var i = 0; i < this.edges.length; i++) {
                  if (this.edges[i] != edge)
                      tmp.push(this.edges[i]);
              }
              this.edges = tmp;
          },
          add: function (tileIndex) {
              var $t = this.tiles.eq(tileIndex);

              var $item = $t.find('.item');
              var key = "tile" + tileIndex;
              var w = this.imagesData[key].width;
              var h = this.imagesData[key].height;


              var hEdge = this.higherEdge();
              this.print(hEdge);
              hEdge.tileIndex = tileIndex;

              this.print(tileIndex + " [" + $t.data("ftg-type") + "] (" + w + "x" + h + ")");

              if (hEdge.top > 0) {
                  hEdge.top += this.settings.margin;
              }

              $t.css({
                  left: hEdge.left,
                  top: hEdge.top,
                  position: 'absolute'
              });

              hEdge.enlarged = false;

              //is the tile wider than the current edge?
              if (hEdge.width < w + this.settings.margin) {
                  hEdge.case = 'Te';
                  this.print('Te', hEdge.width);
                  //edge smaller than the image
                  var w2 = hEdge.width;
                  var h2 = (h / w) * w2;

                  if (w2 + hEdge.left - this.settings.margin == this.currentWidth) {
                      this.print("END");
                      w2 -= this.settings.margin;
                      h2 = (h / w) * w2;
                  }

                  w = w2;
                  h = h2;
              } else if (hEdge.width > w) {
                  this.print('tE');
                  //break the edge
                  //is the new edge wider than minTileWidth?
                  if (this.settings.layout == 'columns' || hEdge.width - w >= this.settings.minTileWidth) {
                      hEdge.case = 'tE';
                      this.print('tE1', hEdge.width, hEdge.left, this.currentWidth);

                      var newEdge = {
                          left: hEdge.left + w + this.settings.margin,
                          top: hEdge.top - (hEdge.top > 0 ? this.settings.margin : 0),
                          width: hEdge.width - w - this.settings.margin,
                          marginLeft: true,
                          case: 'NEW',
                          index: hEdge.index + 1
                      }

                      //console.log("newEdge", newEdge);
                      this.edges.push(newEdge);
                      //this.printEdge(newEdge);
                  } else {
                      hEdge.case = 'tE2';
                      this.print('tE2');
                      //not enough space for the next tile
                      //enlargement
                      this.print("enlargement", hEdge.width, hEdge.left, this.currentWidth);
                      var m = hEdge.left + hEdge.width == this.currentWidth ?  0 : this.settings.margin;
                      //var w2 = hEdge.width - m;
                      var w2 = hEdge.width;
                      var h2 = this.settings.allowEnlargement && this.settings.layout != 'rows' ? (h / w) * w2 : h;

                      if (this.settings.allowEnlargement) {
                          $t.addClass("ftg-enlarged");
                          hEdge.enlarged = true;
                      } else {
                          if(this.settings.layout != 'rows')
                              $t.find(".item").css({
                                  width: w,
                                  height: h
                              });
                      }

                      w = w2;
                      h = h2;
                  }
              }

              hEdge.top += h;
              if(this.settings.gridSize) {
                  var diff = hEdge.top % this.settings.gridSize;
                  hEdge.top -= diff;
                  h -= diff;
              }

              hEdge.left = hEdge.left;
              hEdge.width = w;
              //hEdge.index = tileIndex + 1;

              var printEdge = true;

              var aligned = this.alignEdge(hEdge, tileIndex);
              if (aligned) {
                  if(aligned.side == 'left') {
                      this.removeEdge(hEdge);
                      aligned.edge.width += w + this.settings.margin;
                      h = h - (hEdge.top - aligned.edge.top);
                      hEdge.top -= h;
                      printEdge = false;
                  } else {
                      this.removeEdge(aligned.edge);
                      hEdge.width += this.settings.margin + aligned.edge.width;
                      printEdge = false;
                  }

                  $t.height(h);
              }

              if (this.$element.find(".ftg-items").height() < hEdge.top)
                  this.$element.find(".ftg-items").height(hEdge.top);

              if(this.settings.debug && printEdge) {
                  this.printEdge(hEdge);
              }

              if ($t.data("ftg-type") == "iframe") {
                  $t.find("iframe").height(h);
              }

              this.print(w + "x" + h);
              this.print("----");

              $t.css({
                  width: w,
                  height: h
              });

              var ratio = w / this.imagesData[key].width;

              var hdiff = (this.imagesData[key].height * ratio) - h;

              $item.css({ height: "auto" });
              if(hdiff > 0) {
                  $item.css({
                      top: 0 - (hdiff / 2)
                  });
              }
              $t.addClass("ftg-loaded");
          }
      });

      $.fn[pluginName] = function (options) {
          this.each(function () {
              if (!$.data(this, pluginName)) {
                  $.data(this, pluginName, new Plugin(this, options));
              }
          });

          // chain jQuery functions
          return this;
      };

      $(function () {
          $(".ftg-social a").click(function(e) {

              e.preventDefault();
              var social = $(this).data("social");
              var $tile = $(this).parents(".tile").first();
              var image = $tile.data("big");
              if(! image)
                  image = $tile.find(".item").attr("src");

              var text = $.trim($tile.find(".caption").text());
              if(! text.length)
                  text = document.title;

              if(social == "facebook") {
                  var url = "https://www.facebook.com/dialog/feed?app_id=1447224948871585&"+
                              "link="+encodeURIComponent(location.href)+"&" +
                              "display=popup&"+
                              "name="+encodeURIComponent(document.title)+"&"+
                              "caption=&"+
                              "description="+encodeURIComponent(text)+"&"+
                              "picture="+encodeURIComponent(qualifyURL(image))+"&"+
                              "ref=share&"+
                              "actions={%22name%22:%22View%20the%20gallery%22,%20%22link%22:%22"+encodeURIComponent(location.href)+"%22}&"+
                              "redirect_uri=http://final-tiles-gallery.com/facebook_redirect.html";

                  var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                  w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
              }

              if(social == "twitter") {
                  var w = window.open("https://twitter.com/intent/tweet?url=" + encodeURI(location.href.split('#')[0]) + "&text=" + encodeURI(text), "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                  w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
              }

              if(social == "pinterest") {
                  var url = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(location.href) + "&description=" + encodeURI(text);

                  url += ("&media=" + encodeURIComponent(qualifyURL(image)));

                  var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                  w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
              }

              if(social == "google-plus") {
                  var url = "https://plus.google.com/share?url=" + encodeURI(location.href);

                  var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                  w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
              }
          });
      });
  })(jQuery, window, document);
