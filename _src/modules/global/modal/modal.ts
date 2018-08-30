
// @ts-ignore
import Module from 'core/module';

class Modal extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.el.on('open', (e, data) => this.onModalOpen(e, data));
        this.el.find('*').on('click touchend', (e) => this.onModalElsClick(e));
        this.dom.close.on('click touchend', (e) => this.onModalClose(e));
    }

    onModalOpen(e: EventTarget, data: object) : void
    {
        const self = $(e.currentTarget);

        this.dom.content.html(data.template);

        e.preventDefault();
    }

    onModalClose(e: EventTarget) : void
    {
        this.el.toggleClass('modal--active');

        this.dom.content.empty();

        e.preventDefault();
    }

    onModalElsClick(e: EventTarget) : void
    {
        e.stopPropagation();
    }
}

export default Modal;
