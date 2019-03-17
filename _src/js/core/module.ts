
// @ts-ignore
import { getCachableDomElements } from 'core/bootstrap';

// @ts-ignore
import { getInstanceOfjQuery } from 'helpers/utils';

// @ts-ignore
import { debounce } from 'lodash';

/**
 * Abstract Module class.
 * All modules inherit from this class.
 */
abstract class Module
{
    protected dom : object = {};

    protected options : object = {};

    protected el : JQuery;

    protected readonly VARS =
    {
        SCROLL_THRESHOLD: 15,
        SCROLL_THRESHOLD_REACHED: false,
        TOGGLE_SCROLL_CSS_CLASS: true,
        IGNORE_CACHABLE_DOM_ELEMENTS: false,
        WAIT_DOCUMENT_KEYUP: 25,
        WAIT_WINDOW_RESIZE: 250
    };

   /**
     * Module constructor
     *
     * @param {string|JQuery} el Main DOM element in any valid jQuery form i.e. `#foo` or `.bar` or `[data-baz]` or an actual jQuery object.
     * @param {Object} [opts={}] Module options.
    */
    protected constructor(...args : Array<any>)
    {
        this.el = getInstanceOfjQuery(args[0]);

        if (typeof this.el === 'undefined' || !this.el.length)
        {
            throw new ReferenceError('You must provide an valid element as a string or jQuery type.');
        }


        this.preInit();
        this.updateOptions(args[1]);
        this.init();
        this.updateDom();
        this.preRender();
        this.bindGlobalEventListeners();
        this.bindEventListeners();
        this.render();


        if (__DEV__ || __QA__)
        {
            const self = this;
            const proto = Object.getPrototypeOf(self);

            Object.assign(self,
                { 'this': proto },
                { 'Abstract Methods': Object.getPrototypeOf(proto) });

            console.log(self);
        }
    }

    //#region Abstract Methods

    /**
     * @abstract
     */
    protected preInit() : void {};

    /**
     * @abstract
     */
    protected init() : void {};

    /**
     * @abstract
     */
    protected preRender() : void {};

    /**
     * @abstract
     */
    protected render() : void {};

    /**
     * @abstract
     */
    protected bindEventListeners() : void {};

    /**
     * @abstract
     */
    protected onDocumentKeyup(e : JQuery.Event<Document, null>) : void {}

    /**
     * @abstract
     */
    protected onWindowLoad(e : JQuery.Event<Window, null>) : void {}

    /**
     * @abstract
     */
    protected onWindowScroll(e : JQuery.Event<Window, null>) : void {}

    /**
     * @abstract
     */
    protected onWindowResize(e : JQuery.Event<Window, null>) : void {}

    //#endregion

    protected bindGlobalEventListeners() : void
    {
        this.dom.document.on('keyup', debounce((e : JQuery.Event<Document, null>) =>
        {
            this.onDocumentKeyup(e);
        },
        this.VARS.WAIT_DOCUMENT_KEYUP));


        this.dom.window.on('load', (e : JQuery.Event<Window, null>) =>
        {
            this.dom.window.trigger('scroll');

            this.onWindowLoad(e);
        });


        this.dom.window.on('scroll', (e : JQuery.Event<Window, null>) =>
        {
            const moduleScroll = this.options['scroll'] || this.el.data('scroll') || this.VARS.SCROLL_THRESHOLD;

            this.VARS.SCROLL_THRESHOLD_REACHED = (this.dom.window.scrollTop() >= moduleScroll);

            if (this.VARS.TOGGLE_SCROLL_CSS_CLASS)
            {
                this.el.toggleClass('scroll', this.VARS.SCROLL_THRESHOLD_REACHED);
            }

            this.onWindowScroll(e);
        });


        this.dom.window.on('resize', debounce((e : JQuery.Event<Window, null>) =>
        {
            this.onWindowResize(e);
        },
        this.VARS.WAIT_WINDOW_RESIZE));
    }

    protected updateOptions(opts : object) : void
    {
        Object.assign(this.options, opts);
    }

    protected updateDom() : void
    {
        Object.assign(this.dom,
            (!this.VARS.IGNORE_CACHABLE_DOM_ELEMENTS) ? getCachableDomElements(this.el) : {},
            {
                window: $(window),
                document: $(document),
                base: $.when($('.base')),
                modal: $.when($('.modal')),
                form: $.when($('.form'))
            });
    }
}

export default Module;
