
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import { getInstanceOfjQuery } from 'helpers/utils';

class Modal extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.el.on('open', (e, data) => this.onModalOpen(e, data));
        this.el.on('click touchend focus blur', (e) => this.onModalClose(e));
        this.el.find('*').on('click touchend', (e) => this.onModalElsClick(e));
        this.dom.close.on('click touchend', (e) => this.onModalClose(e));
    }

    onModalOpen(e: EventTarget, data: object) : void
    {
        const self = $(e.currentTarget);
        const tmpl = (/^(#|\.){1}/gm.test(data.template) ? getInstanceOfjQuery(data.template) : data.template);

        this.el.toggleClass('modal--active');

        this.dom.content.html(tmpl);

        e.preventDefault();
    }

    onModalClose(e: EventTarget) : void
    {
        this.el.removeClass('modal--active');

        this.dom.content.empty();

        e.preventDefault();
    }

    onModalElsClick(e: EventTarget) : void
    {
        e.stopPropagation();
    }
}

export default Modal;
