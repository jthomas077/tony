
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import { open, close } from 'helpers/animation';

class MainNav extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.dom.hamburger.on('click touchend', (e) => this.onHamburgerClick(e));
    }

    onHamburgerClick(e: EventTarget) : void
    {
        const self = $(e.currentTarget);

        self.toggleClass('is-active');

        this.dom.list
            .toggleClass('main-nav__list--active')
            .toggleClass('main-nav__list--inactive', !this.dom.list.hasClass('main-nav__list--active'));

        e.preventDefault();
    }
}

export default MainNav;
