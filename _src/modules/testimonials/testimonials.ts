
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import Swiper from 'swiper';

class Testimonials extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    render()
    {
        new Swiper(this.dom.container,
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

            fadeEffect:
            {
                crossFade: true
            }
        });
    }
}

export default Testimonials;
