
export const rules = () =>
{
    let rules =
    [
        {
            test: /\.ts?$/,
            loader: 'awesome-typescript-loader',
            options:
            {
                reportFiles : [`${process.env.SRC}/{js,modules}/**/*.ts`]
            }
        },

        {
            test: /\.html$/,

            loader: 'html-loader',
            options:
            {
                minimize: true
            }
        }
    ];

    return rules;
};
