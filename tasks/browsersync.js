
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/config';
import proxyMiddleware from 'http-proxy-middleware';
import fs from 'fs';

export const got_me_goggles = () =>
{
    const pages = fs.readdirSync(`${process.env.SRC}/pages/`).map(file => `/${file.replace(/\.html/gi, '')}`);

    if (__TOOLING__)
    {
        console.log('    Pages =>', pages)
    }

    const bundler = webpack(webpackConfig);

    browserSync.create(process.env.APP_NAME);

    browserSync.init(
    {
        server:
        {
            baseDir: process.env.DEST,
            index: '/pages/home.html',
            proxy: 'http://localhost:3100/'
        },

        port: process.env.PORT || 1337,

        scrollProportionally: false,

        logFileChanges: false,

        logLevel: 'none',

        middleware:
        [
            webpackDevMiddleware(bundler,
            {
                publicPath: `${process.env.APP_URL}:1337/js/`
            }),
            webpackHotMiddleware(bundler)
        ],

        callbacks:
        {
            ready: (err, bs) =>
            {
                bs.addMiddleware('*', proxyMiddleware(pages,
                {
                    target: `http://localhost:1337`,

                    pathRewrite: (path, req) =>
                    {
                        return `/pages/${path}.html`;
                    }
                }));

                if (process.env.MOCK_API_URL !== '')
                {
                    bs.addMiddleware('*', proxyMiddleware(process.env.MOCK_API_ROUTE,
                    {
                        target: process.env.MOCK_API_URL
                    }));
                }
            }
        }
    });

    return new Promise((resolve) => { resolve(); });
};
