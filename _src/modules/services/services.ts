
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import 'waypoints/lib/jquery.waypoints';

class Services extends Module
{
    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    preInit()
    {
        this.VARS.IGNORE_CACHABLE_DOM_ELEMENTS = true;
    }

    render()
    {
        // @ts-ignore
        new Waypoint(
        {
            element: this.el,

            offset: 500,

            handler: (direction) =>
            {
                this.el.addClass('in-view');
            }
        });
    }
}

export default Services;
