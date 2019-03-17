(window["AnthonysContracting"] = window["AnthonysContracting"] || []).push([[14],{

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

/***/ "./_src/modules/global/modal/modal.ts":
/*!********************************************!*\
  !*** ./_src/modules/global/modal/modal.ts ***!
  \********************************************/
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

var _bootstrap = __webpack_require__(/*! core/bootstrap */ "./_src/js/core/bootstrap.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Module) {
    _inherits(Modal, _Module);

    function Modal(el, opts) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, el, opts));

        _this.CANCEL_CLOSE = false;
        return _this;
    }

    _createClass(Modal, [{
        key: 'init',
        value: function init() {
            this.dom = {
                html: $('html'),
                main: $('main')
            };
        }
    }, {
        key: 'bindEventListeners',
        value: function bindEventListeners() {
            var _this2 = this;

            this.el.on('open', function (e, data) {
                return _this2.onModalOpen(e, data);
            });
            this.el.on('close', function (e, data) {
                return _this2.onModalClose(e, data);
            });
            this.el.on('click touchend', function (e) {
                return _this2.onModalClose(e);
            });
            this.dom.close.on('click touchend', function (e) {
                return _this2.onModalClose(e);
            });
            this.dom.content.on('click touchend', function (e) {
                return _this2.onModalElsClick(e);
            });
        }
    }, {
        key: 'onModalOpen',
        value: function onModalOpen(e, data) {
            var self = $(e.currentTarget);
            this.dom.html.addClass('modal---active');
            self.addClass('modal--active');
            console.log(JSON.stringify({ params: data.opts }));
            this.dom.content.find('.free-quote').attr('data-module-opts', JSON.stringify({ params: data.opts }).replace(/"/g, '\'')).addClass('in-view');
            (0, _bootstrap.discoverModules)('.modal__content ');
            e.preventDefault();
        }
    }, {
        key: 'onModalClose',
        value: function onModalClose(e) {
            var _this3 = this;

            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.CANCEL_CLOSE === false) {
                if (!this.dom.main.hasClass('main--active')) {
                    this.dom.html.removeClass('modal---active');
                }
                this.el.removeClass('modal--active');
                setTimeout(function () {
                    _this3.dom.content.find('.free-quote').removeClass('in-view').data('module-opts', '');
                }, 250);
            }
            this.CANCEL_CLOSE = false;
            e.preventDefault();
        }
    }, {
        key: 'onModalElsClick',
        value: function onModalElsClick(e) {
            this.CANCEL_CLOSE = true;
        }
    }]);

    return Modal;
}(_module2.default);

exports.default = Modal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ })

}]);
//# sourceMappingURL=14.js.map