
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import 'selectric';

class Gallery extends Module
{
    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.dom.navList.on('change', (e) => this.onNavListClick(e));
    }

    render()
    {
        this.dom.navList.selectric(
        {
            onChange: (el) =>
            {
                $(el).change();
            }
        });

		this.dom.imgs.magnificPopup(
        {
            delegate: '.tile:not(.ftg-hidden) .tile-inner',
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade mfp-with-zoom',
            gallery:
            {
                enabled: true,
                preload: [0,2],
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Previous (Left arrow key)',
                tNext: 'Next (Right arrow key)',
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
            },
            zoom:
            {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: (openerElement) =>
                {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            },
            callbacks:
            {
                change: () =>
                {
                    if (this.isOpen)
                    {
                        this.wrap.addClass('mfp-open');
                    }
                }
            },
	        fixedContentPos: false
        });

        this.dom.imgs.finalTilesGallery(
        {
            margin: 15,
            minTileWidth: 200,
            gridSize: 50,
            imageSizeFactor: [[4000, .4], [1280, .3], [1024, .7], [600, .6], [480, .5]],
            columns:
            [
                [4000, 4],
                [1280, 3],
                [1024, 2],
                [600, 1],
                [320, 1]
            ],
        });
    }

    onNavListClick(e: EventTarget) : void
    {
        const self = $(e.currentTarget);

        if (self.val() !== '')
        {
            $(location).attr('href', `${self.val()}`);
        }

        e.preventDefault();
    }
}

export default Gallery;
