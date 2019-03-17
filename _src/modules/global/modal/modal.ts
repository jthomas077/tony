
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import { getInstanceOfjQuery } from 'helpers/utils';

// @ts-ignore
import { discoverModules } from 'core/bootstrap';

class Modal extends Module
{
    private CANCEL_CLOSE : boolean = false;

    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    init()
    {
        this.dom =
        {
            html: $('html'),
            main: $('main'),
            freeQuoteLnk: $('.free-quote-lnk'),
        };
    }

    bindEventListeners()
    {
        this.el.on('open', (e, data) => this.onModalOpen(e, data));
        this.el.on('close', (e, data) => this.onModalClose(e, data));
        this.el.on('click touchend', (e) => this.onModalClose(e));
        this.dom.close.on('click touchend', (e) => this.onModalClose(e));
        this.dom.content.on('click touchend', (e) => this.onModalElsClick(e));
    }

    onModalOpen(e : EventTarget, data : object) : void
    {
        const self = $(e.currentTarget);
        //const tmpl = (/^(#|\.){1}/.test(data.template) ? getInstanceOfjQuery(data.template).html() : data.template);

        this.dom.html.addClass('modal---active');
        self.addClass('modal--active');

console.log(JSON.stringify({ params: data.opts }))
        this.dom.content
            .find('.free-quote')
            .attr('data-module-opts', JSON.stringify({ params: data.opts}).replace(/"/g, '\''))
            .addClass('in-view');


        discoverModules('.modal__content ');

        e.preventDefault();
    }

    onModalClose(e : EventTarget, data : object = {}) : void
    {
        if (this.CANCEL_CLOSE === false)
        {
            if (!this.dom.main.hasClass('main--active'))
            {
                this.dom.html.removeClass('modal---active');
            }

            this.el.removeClass('modal--active');
            this.dom.freeQuoteLnk.removeClass('main-nav__lnk--selected');

            setTimeout(() =>
            {
                //this.dom.content.empty();

                this.dom.content
                    .find('.free-quote')
                    .removeClass('in-view')
                    .data('module-opts', '');
            },
            250);
        }

        this.CANCEL_CLOSE = false;

        e.preventDefault();
    }

    onModalElsClick(e : EventTarget) : void
    {
        this.CANCEL_CLOSE = true;
    }
}

export default Modal;
