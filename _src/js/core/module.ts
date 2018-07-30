
// @ts-ignore
import { getInstanceOfjQuery } from 'helpers/utils';
// @ts-ignore
import IModule from 'core/imodule';

/**
 *
 */
abstract class Module extends IModule
{
    private dom: object = {};
    private options: object = {};
    private el: JQuery;

   /**
     * Module constructor
     *
     * @param {string|JQuery} el - Main DOM element in any valid jQuery form i.e. '#foo' or '.bar' or '[data-baz]' or an actual jQuery object.
     * @param {Object} [opts={}] - Module options.
    */
    constructor(el: string | JQuery, opts: object = {})
    {
        super();

        this.el = getInstanceOfjQuery(el);

        if (typeof this.el === 'undefined' || !this.el.length)
        {
            throw new ReferenceError('You must provide an valid element as a string type or jquery type.');
        }

        Object.assign(this.dom, {});
        Object.assign(this.options, opts);

        this.init();
        this.render();
        this.bindEventListeners();
    }

    /**
     * @abstract
     */
    init() : void {};

    /**
     * @abstract
     */
    render() : void {};

    /**
     * @abstract
     */
    bindEventListeners() : void {};
}

export default Module;
