
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const plugins = () =>
{
    let plugins =
    [
        new webpack.DefinePlugin(
        {
            __DEV__: __DEV__
        }),

        new webpack.ProvidePlugin(
        {
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),

        new ForkTsCheckerWebpackPlugin()
    ];

    if (__DEV__)
    {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
};
