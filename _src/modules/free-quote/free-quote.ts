
// @ts-ignore
import Module from 'core/module';

class Quote extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.dom.lnk.on('click touchend', (e) => this.onLnkClick(e));
    }

    onLnkClick(e: EventTarget) : void
    {
        const self = $(e.currentTarget);



        e.preventDefault();
    }
}

export default Quote;
