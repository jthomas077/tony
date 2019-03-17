(window["AnthonysContracting"] = window["AnthonysContracting"] || []).push([[19],{

/***/ "./_src/js/core/module.ts":
/*!********************************!*\
  !*** ./_src/js/core/module.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bootstrap = __webpack_require__(/*! core/bootstrap */ "./_src/js/core/bootstrap.ts");

var _utils = __webpack_require__(/*! helpers/utils */ "./_src/js/helpers/utils.ts");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function () {
    function Module() {
        _classCallCheck(this, Module);

        this.dom = {};
        this.options = {};
        this.VARS = {
            SCROLL_THRESHOLD: 15,
            SCROLL_THRESHOLD_REACHED: false,
            TOGGLE_SCROLL_CSS_CLASS: true,
            IGNORE_CACHABLE_DOM_ELEMENTS: false,
            WAIT_DOCUMENT_KEYUP: 25,
            WAIT_WINDOW_RESIZE: 250
        };
        this.el = (0, _utils.getInstanceOfjQuery)(arguments.length <= 0 ? undefined : arguments[0]);
        if (typeof this.el === 'undefined' || !this.el.length) {
            throw new ReferenceError('You must provide an valid element as a string or jQuery type.');
        }
        this.preInit();
        this.updateOptions(arguments.length <= 1 ? undefined : arguments[1]);
        this.init();
        this.updateDom();
        this.preRender();
        this.bindGlobalEventListeners();
        this.bindEventListeners();
        this.render();
        if (true) {
            var self = this;
            var proto = Object.getPrototypeOf(self);
            Object.assign(self, { 'this': proto }, { 'Abstract Methods': Object.getPrototypeOf(proto) });
            console.log(self);
        }
    }

    _createClass(Module, [{
        key: 'preInit',
        value: function preInit() {}
    }, {
        key: 'init',
        value: function init() {}
    }, {
        key: 'preRender',
        value: function preRender() {}
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'bindEventListeners',
        value: function bindEventListeners() {}
    }, {
        key: 'onDocumentKeyup',
        value: function onDocumentKeyup(e) {}
    }, {
        key: 'onWindowLoad',
        value: function onWindowLoad(e) {}
    }, {
        key: 'onWindowScroll',
        value: function onWindowScroll(e) {}
    }, {
        key: 'onWindowResize',
        value: function onWindowResize(e) {}
    }, {
        key: 'bindGlobalEventListeners',
        value: function bindGlobalEventListeners() {
            var _this = this;

            this.dom.document.on('keyup', (0, _lodash.debounce)(function (e) {
                _this.onDocumentKeyup(e);
            }, this.VARS.WAIT_DOCUMENT_KEYUP));
            this.dom.window.on('load', function (e) {
                _this.dom.window.trigger('scroll');
                _this.onWindowLoad(e);
            });
            this.dom.window.on('scroll', function (e) {
                var moduleScroll = _this.options['scroll'] || _this.el.data('scroll') || _this.VARS.SCROLL_THRESHOLD;
                _this.VARS.SCROLL_THRESHOLD_REACHED = _this.dom.window.scrollTop() >= moduleScroll;
                if (_this.VARS.TOGGLE_SCROLL_CSS_CLASS) {
                    _this.el.toggleClass('scroll', _this.VARS.SCROLL_THRESHOLD_REACHED);
                }
                _this.onWindowScroll(e);
            });
            this.dom.window.on('resize', (0, _lodash.debounce)(function (e) {
                _this.onWindowResize(e);
            }, this.VARS.WAIT_WINDOW_RESIZE));
        }
    }, {
        key: 'updateOptions',
        value: function updateOptions(opts) {
            Object.assign(this.options, opts);
        }
    }, {
        key: 'updateDom',
        value: function updateDom() {
            Object.assign(this.dom, !this.VARS.IGNORE_CACHABLE_DOM_ELEMENTS ? (0, _bootstrap.getCachableDomElements)(this.el) : {}, {
                window: $(window),
                document: $(document),
                base: $.when($('.base')),
                modal: $.when($('.modal')),
                form: $.when($('.form'))
            });
        }
    }]);

    return Module;
}();

exports.default = Module;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./_src/modules/recent-projects/recent-projects.ts":
/*!*********************************************************!*\
  !*** ./_src/modules/recent-projects/recent-projects.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! core/module */ "./_src/js/core/module.ts");

var _module2 = _interopRequireDefault(_module);

var _swiper = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.js");

var _swiper2 = _interopRequireDefault(_swiper);

__webpack_require__(/*! waypoints/lib/jquery.waypoints */ "./node_modules/waypoints/lib/jquery.waypoints.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecentProjects = function (_Module) {
    _inherits(RecentProjects, _Module);

    function RecentProjects(el, opts) {
        _classCallCheck(this, RecentProjects);

        return _possibleConstructorReturn(this, (RecentProjects.__proto__ || Object.getPrototypeOf(RecentProjects)).call(this, el, opts));
    }

    _createClass(RecentProjects, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            new Waypoint({
                element: this.el,
                offset: 1000,
                handler: function handler(direction) {
                    _this2.initSwiper();
                    _this2.el.addClass('in-view');
                }
            });
        }
    }, {
        key: 'initSwiper',
        value: function initSwiper() {
            var _this3 = this;

            var slides = this.dom.swiperSlide.length;
            this.swiper = new _swiper2.default(this.dom.swiperContainer, {
                autoplay: {
                    delay: 5000
                },
                speed: 1500,
                allowTouchMove: true,
                grabCursor: true,
                watchOverflow: true,
                preloadImages: false,
                lazy: true,
                breakpoints: {
                    10000: {
                        slidesPerView: slides >= 5 ? 5 : 'auto',
                        slidesPerGroup: slides > 5 ? 5 : 'auto',
                        spaceBetween: 35,
                        loop: slides > 5,
                        calcWidth: false,
                        slideHeight: 700
                    },
                    2560: {
                        slidesPerView: slides >= 3 ? 3 : 'auto',
                        slidesPerGroup: slides > 3 ? 3 : 'auto',
                        spaceBetween: 35,
                        loop: slides > 3,
                        calcWidth: true,
                        slideHeight: 500
                    },
                    1920: {
                        slidesPerView: slides >= 3 ? 3 : 'auto',
                        slidesPerGroup: slides > 3 ? 3 : 'auto',
                        spaceBetween: 35,
                        loop: slides > 3,
                        calcWidth: true,
                        slideHeight: 400
                    },
                    1680: {
                        slidesPerView: slides >= 2 ? 2 : 'auto',
                        slidesPerGroup: slides > 2 ? 2 : 'auto',
                        spaceBetween: 25,
                        loop: slides > 2,
                        calcWidth: true,
                        slideHeight: 400
                    },
                    1280: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 25,
                        loop: slides > 1,
                        calcWidth: false
                    }
                },
                on: {
                    breakpoint: function breakpoint(x) {
                        if (x.slidesPerView === 'auto') {
                            _this3.dom.swiperWrapper.toggleClass('centered');
                        }
                        if (x.calcWidth) {
                            _this3.dom.swiperSlide.css({
                                'width': 'calc(100% / ' + slides + ')'
                            });
                        }
                        if (x.slideHeight !== undefined) {
                            _this3.dom.swiperSlide.css({
                                'height': x.slidesPerView !== 'auto' ? x.slideHeight + 'px' : x.slideHeight + 100 + 'px'
                            });
                        }
                    }
                },
                navigation: {
                    nextEl: this.dom.swiperButtonNext,
                    prevEl: this.dom.swiperButtonPrev
                }
            });
            this.dom.base.then(function (global) {
                return global.trigger('register:swiper', {
                    id: _this3.el.attr('class'),
                    swiper: _this3.swiper
                });
            });
        }
    }]);

    return RecentProjects;
}(_module2.default);

exports.default = RecentProjects;

/***/ })

}]);
//# sourceMappingURL=19.js.map