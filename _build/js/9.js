(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{347:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(354));var o=function(t){function n(e,t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r.default),i(n,[{key:"bindEventListeners",value:function(){var e=this;this.dom.hamburger.on("click touchend",function(t){return e.onHamburgerClick(t)})}},{key:"onHamburgerClick",value:function(t){e(t.currentTarget).toggleClass("is-active"),this.dom.list.toggleClass("main-nav__list--active").toggleClass("main-nav__list--inactive",!this.dom.list.hasClass("main-nav__list--active")),t.preventDefault()}}]),n}();t.default=o}).call(this,n(29))},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(127),o=n(91);var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.opts=n,this.dom={},this.options={},this.el=(0,o.getInstanceOfjQuery)(t),void 0===this.el||!this.el.length)throw new ReferenceError("You must provide an valid element as a string type or jquery type.");Object.assign(this.options,n),this.preInit(),this.init(),this.updateDom(),this.bindEventListeners(),this.render()}return i(e,[{key:"preInit",value:function(){}},{key:"init",value:function(){}},{key:"render",value:function(){}},{key:"bindEventListeners",value:function(){}},{key:"updateDom",value:function(){Object.assign(this.dom,(0,r.getCachableDomElements)(this.el))}}]),e}();t.default=a}}]);
//# sourceMappingURL=9.js.map