
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import Swiper from 'swiper';

class MainHero extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    init()
    {
        setTimeout(() =>
        {
            this.dom.heroCallout.addClass('hero-callout--init');
        },
        0);
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

    }
}

export default MainHero;
