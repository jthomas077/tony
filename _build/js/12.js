(window["AnthonysContracting"] = window["AnthonysContracting"] || []).push([[12],{

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

/***/ "./_src/js/helpers/animation.ts":
/*!**************************************!*\
  !*** ./_src/js/helpers/animation.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollTo = exports.slide = exports.close = exports.open = undefined;

var _gsap = __webpack_require__(/*! gsap */ "./node_modules/gsap/umd/TweenMax.js");

__webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");

var open = exports.open = function open(el) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.4;
    var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOut';
    var onComplete = arguments[3];

    _gsap.TweenMax.set(el, { height: 'auto' });
    _gsap.TweenMax.from(el, speed, { height: 0, ease: _gsap.Expo[ease], onComplete: onComplete });
};
var close = exports.close = function close(el) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.4;
    var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOut';
    var onComplete = arguments[3];

    _gsap.TweenMax.to(el, speed, { height: 0, ease: _gsap.Expo[ease], onComplete: onComplete });
};
var slide = exports.slide = function slide(el) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.4;
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var ease = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'easeOut';
    var onComplete = arguments[4];

    _gsap.TweenMax.to(el, speed, { x: x, ease: _gsap.Expo[ease], onComplete: onComplete });
};
var scrollTo = exports.scrollTo = function scrollTo(y) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.5;
    var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOut';
    var onComplete = arguments[3];

    _gsap.TweenMax.to($(window), speed, { scrollTo: { y: y }, ease: _gsap.Expo[ease], onComplete: onComplete });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./_src/js/helpers/keycode.ts":
/*!************************************!*\
  !*** ./_src/js/helpers/keycode.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var KEY_CODE = exports.KEY_CODE = {
    ENTER: 13,
    ESC: 27
};
Object.freeze(KEY_CODE);

/***/ }),

/***/ "./_src/modules/global/global.ts":
/*!***************************************!*\
  !*** ./_src/modules/global/global.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! core/module */ "./_src/js/core/module.ts");

var _module2 = _interopRequireDefault(_module);

var _keycode = __webpack_require__(/*! helpers/keycode */ "./_src/js/helpers/keycode.ts");

var _animation = __webpack_require__(/*! helpers/animation */ "./_src/js/helpers/animation.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Global = function (_Module) {
    _inherits(Global, _Module);

    function Global(el, opts) {
        _classCallCheck(this, Global);

        var _this = _possibleConstructorReturn(this, (Global.__proto__ || Object.getPrototypeOf(Global)).call(this, el, opts));

        _this.swipers = [];
        return _this;
    }

    _createClass(Global, [{
        key: 'preInit',
        value: function preInit() {
            this.VARS.IGNORE_CACHABLE_DOM_ELEMENTS = true;
        }
    }, {
        key: 'init',
        value: function init() {
            this.dom = {
                swiperContainer: $('.swiper-container'),
                mainContent: $('.main__content'),
                freeQuoteLnk: $('.free-quote-lnk'),
                backToTopLnk: $('.back-to-top')
            };
        }
    }, {
        key: 'bindEventListeners',
        value: function bindEventListeners() {
            var _this2 = this;

            this.el.on('register:swiper', function (e, data) {
                return _this2.onRegisterSwiper(e, data);
            });
            this.el.on('update:swipers', function (e, data) {
                return _this2.onUpdateSwipers(e, data);
            });
            this.dom.freeQuoteLnk.on('click touchend', function (e) {
                return _this2.onFreeQuoteLnkClick(e);
            });
            this.dom.backToTopLnk.on('click touchend', function (e) {
                return _this2.onBackToTopLnkClick(e);
            });
            this.dom.swiperContainer.each(function (idx, el) {
                el = $(el);
                el.on('mouseout', function (e) {
                    _this2.onUpdateSwipers(e, { idx: idx, running: true });
                });
                el.find('*').on('mouseenter', function (e) {
                    _this2.onUpdateSwipers(e, { idx: idx, running: false });
                });
            });
        }
    }, {
        key: 'onWindowScroll',
        value: function onWindowScroll(e) {
            this.dom.mainContent.toggleClass('scroll', this.VARS.SCROLL_THRESHOLD_REACHED);
            this.dom.backToTopLnk.toggleClass('scroll', this.VARS.SCROLL_THRESHOLD_REACHED);
        }
    }, {
        key: 'onDocumentKeyup',
        value: function onDocumentKeyup(e) {
            if (e.keyCode === _keycode.KEY_CODE.ESC) {
                this.dom.modal.then(function (modal) {
                    return modal.trigger('close');
                });
            }
        }
    }, {
        key: 'onFreeQuoteLnkClick',
        value: function onFreeQuoteLnkClick(e) {
            var self = $(e.currentTarget);
            var params = self.data('params');
            this.dom.modal.then(function (modal) {
                return modal.trigger('open', [{ opts: params }]);
            });
            e.preventDefault();
        }
    }, {
        key: 'onBackToTopLnkClick',
        value: function onBackToTopLnkClick(e) {
            (0, _animation.scrollTo)(0);
            e.preventDefault();
        }
    }, {
        key: 'onRegisterSwiper',
        value: function onRegisterSwiper(e, data) {
            var duplicateSwiper = this.swipers.some(function (swiper) {
                return swiper.id === data.id;
            });
            if (!duplicateSwiper) {
                this.swipers.push({ id: data.id, swiper: data.swiper });
            }
        }
    }, {
        key: 'onUpdateSwipers',
        value: function onUpdateSwipers(e, data) {
            var len = data['idx'] !== undefined ? data.idx : this.swipers.length;
            for (var i = 0; i <= len; i++) {
                var swiper = this.swipers[i];
                if (swiper !== undefined) {
                    swiper = swiper.swiper;
                    if (data.running) {
                        swiper.autoplay.start();
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            }
        }
    }]);

    return Global;
}(_module2.default);

exports.default = Global;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ })

}]);
//# sourceMappingURL=12.js.map