
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import Swiper from 'swiper';

// @ts-ignore
import 'waypoints/lib/jquery.waypoints';

class Testimonials extends Module
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
        this.swiper = new Swiper(this.dom.container,
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
            //autoHeight: true,

            fadeEffect:
            {
                crossFade: true
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

export default Testimonials;
