(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{343:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(354)),o=l(n(385)),a=l(n(429));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(t){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return r.filters=[],r.loadCnt=0,r.scrollThreshold=900,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,i.default),r(n,[{key:"render",value:function(){this.dom.imgs.magnificPopup({delegate:".tile:not(.ftg-hidden) .tile-inner",type:"image",removalDelay:300,mainClass:"mfp-fade mfp-with-zoom",gallery:{enabled:!0,preload:[0,2],navigateByImgClick:!0,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:'<span class="mfp-counter">%curr% of %total%</span>'},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}},callbacks:{change:function(){this.isOpen&&this.wrap.addClass("mfp-open")}},fixedContentPos:!1}),this.dom.imgs.finalTilesGallery({margin:15,minTileWidth:200,gridSize:50,imageSizeFactor:[[4e3,.4],[1280,.3],[1024,.7],[600,.6],[480,.5]],columns:[[4e3,4],[1280,3],[1024,2],[600,1],[320,1]]})}},{key:"bindEventListeners",value:function(){var e=this;this.dom.loadmoreLnk.on("click touchend",function(t){return e.onLoadMoreClick(t)})}},{key:"onWindowScroll",value:function(t){var n=e(t.currentTarget);this.dom.filter.toggleClass("scroll",n.scrollTop()>this.scrollThreshold)}},{key:"onFilterChange",value:function(t){var n=e(t.currentTarget),r=n.data("filter");this.filters.includes(r)?this.filters.splice(this.filters.findIndex(function(e){return e===r}),1):this.filters.push(r),n.toggleClass("gallery__filter-lnk--selected"),this.onGetGalleryImages(),t.preventDefault()}},{key:"onLoadMoreClick",value:function(e){this.onGetGalleryImages(),e.preventDefault()}},{key:"getGalleryImages",value:function(){return e.getJSON("/data/gallery.json")}},{key:"renderGallery",value:function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(i,o){try{var a=t[i](o),l=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}("next")})}}(regeneratorRuntime.mark(function e(){var t,n,r,i,l,s,u,c=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGalleryImages();case 2:for(t=e.sent,[],n=!0,r=!1,i=void 0,e.prev=7,l=t[Symbol.iterator]();!(n=(s=l.next()).done);n=!0)u=s.value,this.dom.imgs.append((0,o.default)(a.default)(u)),this.updateDom(),setTimeout(function(){c.dom.imgLnk.removeClass("gallery__img-lnk--init").addClass("gallery__img-lnk--init")},50);e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),r=!0,i=e.t0;case 15:e.prev=15,e.prev=16,!n&&l.return&&l.return();case 18:if(e.prev=18,!r){e.next=21;break}throw i;case 21:return e.finish(18);case 22:return e.finish(15);case 23:case"end":return e.stop()}},e,this,[[7,11,15,23],[16,,18,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"onGetGalleryImages",value:function(){this.renderGallery().then(function(){Promise.resolve()}).catch(function(e){Promise.reject(new Error("There was an issue fetching your results => "+e))})}}]),n}();t.default=s}).call(this,n(29))},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(127),o=n(91);var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.opts=n,this.dom={},this.options={},this.el=(0,o.getInstanceOfjQuery)(t),void 0===this.el||!this.el.length)throw new ReferenceError("You must provide an valid element as a string type or jquery type.");Object.assign(this.options,n),this.preInit(),this.init(),this.updateDom(),this.bindEventListeners(),this.render()}return r(e,[{key:"preInit",value:function(){}},{key:"init",value:function(){}},{key:"render",value:function(){}},{key:"bindEventListeners",value:function(){}},{key:"updateDom",value:function(){Object.assign(this.dom,(0,i.getCachableDomElements)(this.el))}}]),e}();t.default=a},429:function(e,t){e.exports=' <div class="tile ftg-loaded" data-img="<%= src %>"> <a href="<%= src %>" title="<%= title %>" class="gallery__img-lnk tile-inner"> <img src="<%= src %>" data-src="<%= src %>" alt="<%= title %>" title="<%= title %>" class="gallery__img item"/> </a> </div> '}}]);
//# sourceMappingURL=5.js.map