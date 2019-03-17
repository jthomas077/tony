
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import Swiper from 'swiper';

// @ts-ignore
import 'waypoints/lib/jquery.waypoints';

class RecentProjects extends Module
{
    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    render()
    {
        // @ts-ignore
        new Waypoint(
        {
            element: this.el,

            offset: 1000,

            handler: (direction) =>
            {
                this.initSwiper();

                this.el.addClass('in-view');
            }
        });
    }

    initSwiper() : void
    {
        const slides = this.dom.swiperSlide.length;

        this.swiper = new Swiper(this.dom.swiperContainer,
        {
            autoplay:
            {
                delay: 5000,
            },
            speed: 1500,
            allowTouchMove: true,
            grabCursor: true,
            watchOverflow: true,
            preloadImages: false,
            lazy: true,

            breakpoints:
            {
                10000:
                {
                    slidesPerView: (slides >= 5) ? 5 : 'auto',
                    slidesPerGroup: (slides > 5) ? 5 : 'auto',
                    spaceBetween: 35,
                    loop: (slides > 5),
                    calcWidth: false,
                    slideHeight: 700
                },

                2560:
                {
                    slidesPerView: (slides >= 3) ? 3 : 'auto',
                    slidesPerGroup: (slides > 3) ? 3 : 'auto',
                    spaceBetween: 35,
                    loop: (slides > 3),
                    calcWidth: true,
                    slideHeight: 500
                },

                1920:
                {
                    slidesPerView: (slides >= 3) ? 3 : 'auto',
                    slidesPerGroup: (slides > 3) ? 3 : 'auto',
                    spaceBetween: 35,
                    loop: (slides > 3),
                    calcWidth: true,
                    slideHeight: 400
                },

                1680:
                {
                    slidesPerView: (slides >= 2) ? 2 : 'auto',
                    slidesPerGroup: (slides > 2) ? 2 : 'auto',
                    spaceBetween: 25,
                    loop: (slides > 2),
                    calcWidth: true,
                    slideHeight: 400
                },

                1280:
                {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                    loop: (slides > 1),
                    calcWidth: false
                }
            },

            on:
            {
                breakpoint: (x) =>
                {
                    if (x.slidesPerView === 'auto')
                    {
                        this.dom.swiperWrapper.toggleClass('centered');
                    }

                    if (x.calcWidth)
                    {
                        this.dom.swiperSlide.css(
                        {
                            'width': `calc(100% / ${slides})`
                        });
                    }

                    if (x.slideHeight !== undefined)
                    {
                        this.dom.swiperSlide.css(
                        {
                            'height': (x.slidesPerView !== 'auto') ? `${x.slideHeight}px` : `${x.slideHeight + 100}px`
                        });
                    }
                },
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

export default RecentProjects;
