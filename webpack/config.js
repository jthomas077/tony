
import * as config from './';
import path from 'path';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';

export default
{
    entry: config.entry(),

    output:
    {
        path: path.resolve(`${process.env.DEST}`),
        publicPath: (__DEV__) ? '/js/' : `/${process.env.APP_SHORT_NAME}/js/`,
        filename: '[name].js',
        jsonpFunction: process.env.APP_SHORT_NAME
    },

    resolve:
    {
        extensions: ['.ts', '.js', '.json', '.html'],

        alias: config.alias(),

        modules: ['node_modules'],

        plugins:
        [
            new DirectoryNamedWebpackPlugin()
        ]
    },

    optimization:
    {
        splitChunks:
        {
            chunks: 'async',
            automaticNameDelimiter: '.',
            name: true
        }
    },

    externals:
    [
        /^(jquery|\$)$/i,

        (context, request, cb) =>
        {
            cb();
        }
    ],

    module:
    {
        rules: config.rules()
    },

    plugins: config.plugins(),

    mode: (__DEV__ || __QA__) ? 'development' : process.env.NODE_ENV,

    devtool: (__DEV__ || __QA__) ? 'source-map' : '',

    devServer:
    {
        contentBase: 'js',
        logLevel: 'warn'
    }
};
