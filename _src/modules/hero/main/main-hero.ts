
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import Swiper from 'swiper';

class MainHero extends Module
{
    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    init()
    {
        setTimeout(() =>
        {
            if (!!this.dom.heroCallout)
            {
                this.dom.heroCallout.addClass('hero-callout--init');
            }
        },
        0);
    }

    render()
    {
        this.initSwiper();
    }

    initSwiper() : void
    {
        this.swiper = new Swiper(this.dom.swiperContainer,
        {
            loop: true,
            effect: 'fade',
            autoplay:
            {
                delay: 5000,
            },
            speed: 1500,
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


        this.dom.base
            .then(global => global.trigger('register:swiper',
            {
                id: this.el.attr('class'),
                swiper: this.swiper
            }));
    }
}

export default MainHero;
