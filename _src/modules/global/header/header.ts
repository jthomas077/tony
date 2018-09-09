
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import debounce from 'lodash/debounce';

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
        $(window).on('scroll', (e) => this.onWindowScroll(e))
                 .on('load resize', debounce(::this.onWindowResize.bind(this), 250));
    }

    onWindowScroll(e: JQuery.Event<Window, null>) : void
    {
        const self = $(e.currentTarget);

        if (window.matchMedia('(min-width: 1280px').matches)
        {
            this.el.toggleClass('scroll', self.scrollTop() > this.scrollThreshold);
        }
    }

    onWindowResize(e: EventTarget) : void
    {
        if (window.matchMedia('(max-width: 1279px').matches && !this.el.hasClass('scroll'))
        {
            this.el.toggleClass('scroll');
        }
    }
}

export default Header;
