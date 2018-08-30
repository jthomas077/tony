
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
            autoplay: 5000,
            slidesPerView: 3,
            allowTouchMove: true,
            grabCursor: true,
            spaceBetween: 35,

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
