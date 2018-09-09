
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import debounce from 'lodash/debounce';

// @ts-ignore
import template from 'lodash/template';

// @ts-ignore
import galleryItemTmpl from './gallery-item';

class Gallery extends Module
{
    private filters: Array<string> = [];
    private loadCnt: number = 0;

    private readonly scrollThreshold: number = 900;

    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    render()
    {
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
                opener: function(openerElement)
                {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            },
            callbacks:
            {
                change: function()
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
            imageSizeFactor: [[4000, .4],[1280, .3],[1024, .7],[600, .6],[480, .5]],
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

    bindEventListeners()
    {
        //$(window).on('scroll', (e) => this.onWindowScroll(e));

        //this.dom.filterLnk.on('click touchend', (e) => this.onFilterChange(e));
        this.dom.loadmoreLnk.on('click touchend', (e) => this.onLoadMoreClick(e));
    }

    onWindowScroll(e: JQuery.Event<Window, null>) : void
    {
        const self = $(e.currentTarget);

        this.dom.filter.toggleClass('scroll', self.scrollTop() > this.scrollThreshold);
    }

    onFilterChange(e)
    {
        const self = $(e.currentTarget);
        const filter = self.data('filter');

        if (this.filters.includes(filter))
        {
            this.filters.splice(this.filters.findIndex((item) =>
            {
                return item === filter;
            }), 1);
        }
        else
        {
            this.filters.push(filter);
        }

        self.toggleClass('gallery__filter-lnk--selected');

        //console.log(this.filters);

        this.onGetGalleryImages();

        e.preventDefault();
    }

    onLoadMoreClick(e: EventTarget) : void
    {
        this.onGetGalleryImages();

        e.preventDefault();
    }

    getGalleryImages() : JQuery.jqXHR<any>
    {
        return $.getJSON('/data/gallery.json');
    }

    async renderGallery() : Promise<any>
    {
        const images = await this.getGalleryImages();

        //console.log((images[0].height / images[0].width) * 300);

        let items = [];

        for (let image of images)
        {
            this.dom.imgs.append(template(galleryItemTmpl)(image));

            this.updateDom();

            setTimeout(() =>
            {
                this.dom.imgLnk.removeClass('gallery__img-lnk--init').addClass('gallery__img-lnk--init');
            },
            50);
        }
    }

    onGetGalleryImages() : void
    {
        this.renderGallery()
            .then(() =>
            {
                Promise.resolve();
            })
            .catch(err =>
            {
                Promise.reject(new Error(`There was an issue fetching your results => ${err}`));
            });
    }

}

export default Gallery;
