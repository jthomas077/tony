
import webpack from 'webpack';
import { CheckerPlugin } from 'awesome-typescript-loader';

export const plugins = () =>
{
    let plugins =
    [
        new webpack.DefinePlugin(
        {
            __DEV__: __DEV__,
            __QA__: __QA__,
            __HMR__: __HMR__,
        }),

        new webpack.DefinePlugin(
        {
            'process.env': JSON.stringify(process.env)
        }),

        new webpack.ProvidePlugin(
        {
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new webpack.NoEmitOnErrorsPlugin(),

        new CheckerPlugin()
    ];

    if (__HMR__)
    {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
};
