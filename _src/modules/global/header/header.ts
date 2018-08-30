
// @ts-ignore
import Module from 'core/module';

class Header extends Module
{
    private readonly scrollThreshold: number = 15;

    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    init()
    {

    }

    render()
    {

    }

    bindEventListeners()
    {
        $(window).on('scroll', (e) => this.onWindowScroll(e));
    }

    onWindowScroll(e: JQuery.Event<Window, null>) : void
    {
        const self = $(e.currentTarget);

        this.el.toggleClass('scroll', self.scrollTop() > this.scrollThreshold);
    }
}

export default Header;
