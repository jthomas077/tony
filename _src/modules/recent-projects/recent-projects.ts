
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import Swiper from 'swiper';

class RecentProjects extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    render()
    {
        new Swiper(this.dom.swiperContainer,
        {
            loop: true,
            autoplay:
            {
                delay: 5000,
            },
            speed: 1000,
            allowTouchMove: true,
            grabCursor: true,
            watchOverflow: true,
            preloadImages: false,
            lazy: true,

            breakpoints:
            {
                5000:
                {
                    slidesPerView: 3,
                    spaceBetween: 35
                },

                1280:
                {
                    slidesPerView: 2,
                    spaceBetween: 25
                },

                769:
                {
                    slidesPerView: 1,
                    spaceBetween: 25
                }
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

export default RecentProjects;
