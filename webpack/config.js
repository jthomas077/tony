
import { entry, alias, plugins } from './';
import path from 'path';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';

export default
{
    entry: entry(),

    output:
    {
        path: path.resolve(`${process.env.DEST}`),
        publicPath: '/js/',
        filename: '[name].js'
    },

    resolve:
    {
        extensions: ['.ts', '.js', '.json', '.html'],

        alias: alias(),

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

        // query jsdelvr on BUILD!
        (context, request, cb) =>
        {


            cb();
        }
    ],

    module:
    {
        rules:
        [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options:
                {
                    transpileOnly: true
                }
            }
        ]
    },

    plugins: plugins(),

    mode: (__DEV__) ? 'development' : process.env.NODE_ENV,

    devServer:
    {
        publicPath: '/js/'
    },

    devtool: 'source-map'
};