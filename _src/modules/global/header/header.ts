
// @ts-ignore
import Module from 'core/module';

class Header extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    preInit()
    {
        this.VARS.IGNORE_CACHABLE_DOM_ELEMENTS = true;
    }

    onWindowResize(e: JQuery.Event<Window, null>) : void
    {
        if (window.matchMedia('(max-width: 1100px').matches || this.VARS.SCROLL_THRESHOLD_REACHED)
        {
            this.el.addClass('scroll');
        }
        else
        {
            this.el.removeClass('scroll');
        }
    }
}

export default Header;
