
// @ts-ignore
import Module from 'core/module';

class Services extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    init()
    {
        this.dom =
        {
            $cta: this.el.find('.services__box-cta')
        }
    }

    render()
    {
        this.dom.$cta.each((idx, el) =>
        {
            const $el = $(el);
            const $title = $el.parent().find('.services__box-title');

            $el.on('mouseover mouseout', (e) =>
            {
                $title.toggleClass('after');

                e.preventDefault();
            })
        });
    }

    bindEventListeners()
    {

    }
}

export default Services;
