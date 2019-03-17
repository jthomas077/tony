
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import { scrollTo } from 'helpers/animation';

// @ts-ignore
import 'waypoints/lib/jquery.waypoints';

class Service extends Module
{
    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.dom.exploreLnk.on('click touchend', (e) => this.onExploreLnkClick(e));
    }

    render()
    {
        // @ts-ignore
        new Waypoint(
        {
            element: this.dom.info,

            offset: 1000,

            handler: (direction) =>
            {
                this.dom.info.addClass('in-view');
            }
        });


        if (this.dom.explore.length > 1)
        {
            // @ts-ignore
            new Waypoint(
            {
                element: this.dom.explore.last(),

                offset: 1000,

                handler: (direction) =>
                {
                    this.dom.explore.last().addClass('in-view');
                }
            });
        }
    }

    onWindowLoad(e : JQuery.Event<Window, null>) : void
    {
        if (window.matchMedia('(max-width: 1024px').matches)
        {
            this.dom.info.addClass('in-view');
        }
    }

    onExploreLnkClick(e : EventTarget) : void
    {
        const scrollOffset = this.dom.info.eq(0).offset().top - 100;

        scrollTo(scrollOffset);

        e.preventDefault();
    }
}

export default Service;
