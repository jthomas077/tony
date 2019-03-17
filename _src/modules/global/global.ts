
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import { KEY_CODE } from 'helpers/keycode';

// @ts-ignore
import { scrollTo } from 'helpers/animation';

// @ts-ignore
import { template } from 'lodash';

// @ts-ignore
//import freeQuoteTemplate from '../free-quote/free-quote-template';

class Global extends Module
{
    private swipers: Array<object> = [];

    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    preInit()
    {
        this.VARS.IGNORE_CACHABLE_DOM_ELEMENTS = true;
    }

    init()
    {
        this.dom =
        {
            swiperContainer: $('.swiper-container'),
            mainContent: $('.main__content'),
            freeQuoteLnk: $('.free-quote-lnk'),
            backToTopLnk: $('.back-to-top')
        };
    }

    bindEventListeners()
    {
        this.el.on('register:swiper', (e: EventTarget, data: object) => this.onRegisterSwiper(e, data));
        this.el.on('update:swipers', (e: EventTarget, data: object) => this.onUpdateSwipers(e, data));

        this.dom.freeQuoteLnk.on('click touchend', (e: EventTarget) => this.onFreeQuoteLnkClick(e));
        this.dom.backToTopLnk.on('click touchend', (e: EventTarget) => this.onBackToTopLnkClick(e));

        this.dom.swiperContainer.each((idx: number, el: object) =>
        {
            el = $(el);

            el.on('mouseout', (e: EventTarget) =>
            {
                this.onUpdateSwipers(e, { idx: idx, running: true });
            });

            el.find('*').on('mouseenter', (e: EventTarget) =>
            {
                this.onUpdateSwipers(e, { idx: idx, running: false });
            });
        });
    }

    onWindowScroll(e: JQuery.Event<Window, null>) : void
    {
        this.dom.mainContent.toggleClass('scroll', this.VARS.SCROLL_THRESHOLD_REACHED);
        this.dom.backToTopLnk.toggleClass('scroll', this.VARS.SCROLL_THRESHOLD_REACHED);
    }

    onDocumentKeyup(e: JQuery.Event<Document, null>)
    {
        if (e.keyCode === KEY_CODE.ESC)
        {
            this.dom.modal
                .then(modal => modal.trigger('close'));
        }
    }

    onFreeQuoteLnkClick(e: EventTarget) : void
    {
        const self = $(e.currentTarget);
        const params = self.data('params');
        //const tmpl = template(freeQuoteTemplate)({ opts: params })

        this.dom.freeQuoteLnk.addClass('main-nav__lnk--selected');

        this.dom.modal
            .then(modal => modal.trigger('open', [{ opts: params }]));

        e.preventDefault();
    }

    onBackToTopLnkClick(e: EventTarget) : void
    {
        scrollTo(0);

        e.preventDefault();
    }

    onRegisterSwiper(e: EventTarget, data: object) : void
    {
        const duplicateSwiper = this.swipers.some(swiper =>
        {
            return swiper.id === data.id;
        });

        if (!duplicateSwiper)
        {
            this.swipers.push({ id: data.id, swiper: data.swiper });
        }
    }

    onUpdateSwipers(e: EventTarget, data: object) : void
    {
        const len = (data['idx'] !== undefined) ? data.idx : this.swipers.length;

        for (let i = 0; i <= len; i++)
        {
            let swiper = this.swipers[i];

            if (swiper !== undefined)
            {
                swiper = swiper.swiper;

                if (data.running)
                {
                    swiper.autoplay.start();
                }
                else
                {
                    swiper.autoplay.stop();
                }
            }
        }
    }
}

export default Global;
