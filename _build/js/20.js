(window["AnthonysContracting"] = window["AnthonysContracting"] || []).push([[20],{

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

/***/ "./_src/modules/section/section.ts":
/*!*****************************************!*\
  !*** ./_src/modules/section/section.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _module = __webpack_require__(/*! core/module */ "./_src/js/core/module.ts");

var _module2 = _interopRequireDefault(_module);

var _animation = __webpack_require__(/*! helpers/animation */ "./_src/js/helpers/animation.ts");

__webpack_require__(/*! waypoints/lib/jquery.waypoints */ "./node_modules/waypoints/lib/jquery.waypoints.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Service = function (_Module) {
    _inherits(Service, _Module);

    function Service(el, opts) {
        _classCallCheck(this, Service);

        return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this, el, opts));
    }

    _createClass(Service, [{
        key: 'bindEventListeners',
        value: function bindEventListeners() {
            var _this2 = this;

            this.dom.exploreLnk.on('click touchend', function (e) {
                return _this2.onExploreLnkClick(e);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            new Waypoint({
                element: this.dom.info,
                offset: 1000,
                handler: function handler(direction) {
                    _this3.dom.info.addClass('in-view');
                }
            });
            if (this.dom.explore.length > 1) {
                new Waypoint({
                    element: this.dom.explore.last(),
                    offset: 1000,
                    handler: function handler(direction) {
                        _this3.dom.explore.last().addClass('in-view');
                    }
                });
            }
        }
    }, {
        key: 'onWindowLoad',
        value: function onWindowLoad(e) {
            if (window.matchMedia('(max-width: 1024px').matches) {
                this.dom.info.addClass('in-view');
            }
        }
    }, {
        key: 'onExploreLnkClick',
        value: function onExploreLnkClick(e) {
            var scrollOffset = this.dom.info.eq(0).offset().top - 100;
            (0, _animation.scrollTo)(scrollOffset);
            e.preventDefault();
        }
    }]);

    return Service;
}(_module2.default);

exports.default = Service;

/***/ })

}]);
//# sourceMappingURL=20.js.map