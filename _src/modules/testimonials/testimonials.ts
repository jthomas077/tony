
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

    init()
    {
        new Swiper('.testimonials .swiper-container',
        {
            loop: true,
            autoplay: 5000,
            grabCursor: true,
            pagination: '.testimonials .swiper-pagination'
        });
    }

    render()
    {

    }

    bindEventListeners()
    {

    }
}

export default Testimonials;
