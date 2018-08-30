
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import Swiper from 'swiper';

class SubHero extends Module
{
    private readonly scrollThreshold: number = 50;

    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    init()
    {
        setTimeout(() =>
        {
            //this.dom.title.addClass('sub-hero__title--init');
        },
        500);
    }

    render()
    {
        new Swiper(this.dom.swiperContainer,
            {
                loop: true,
                effect: 'fade',
                autoplay:
                {
                    delay: 5000,
                },
                speed: 1000,
                slidesPerView: 1,
                allowTouchMove: true,
                grabCursor: true,
                watchOverflow: true,
                preloadImages: false,
                lazy: true,

                keyboard:
                {
                    enabled: true,
                    onlyInViewport: false,
                },

                fadeEffect:
                {
                    crossFade: true
                },

                navigation:
                {
                    nextEl: this.dom.swiperButtonNext,
                    prevEl: this.dom.swiperButtonPrev
                }
            });
    }

    bindEventListeners()
    {
        $(window).on('scroll', (e) => this.onWindowScroll(e));
    }

    onWindowScroll(e: JQuery.Event<Window, null>) : void
    {
        const self = $(e.currentTarget);

        //this.dom.title.toggleClass('scroll', self.scrollTop() > this.scrollThreshold);
    }
}

export default SubHero;
