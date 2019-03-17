
// @ts-ignore
import Module from 'core/module';

class MainNav extends Module
{
    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    init()
    {
        this.dom =
        {
            html: $('html'),
            main: $('main')
        };
    }

    bindEventListeners()
    {
        this.dom.hamburger.on('click touchend', (e) => this.onHamburgerClick(e));
    }

    onHamburgerClick(e: EventTarget) : void
    {
        const self = $(e.currentTarget);

        self.toggleClass('is-active');

        setTimeout(() =>
        {
            this.dom.html.toggleClass('modal---active');
        },
        (!self.hasClass('is-active')) ? 150 : 300);

        this.dom.base
            .then(global => global.trigger('update:swipers',
            {
                running: !self.hasClass('is-active')
            }));

        this.dom.main.toggleClass('main--active');
        this.dom.list.toggleClass('main-nav__list--active');

        e.preventDefault();
    }
}

export default MainNav;
