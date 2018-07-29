
import path from 'path';
import { readdirSync, statSync } from 'fs';

export const alias = () =>
{
    const aliasi =
    {
        core: path.resolve(`${process.env.SRC}/js/core`),
        helpers: path.resolve(`${process.env.SRC}/js/helpers`),
        modules: path.resolve(`${process.env.SRC}/modules`)
    };

    const getDirectories = srcPath => readdirSync(srcPath).filter(file => statSync(path.join(srcPath, file)).isDirectory())

    const dirs = getDirectories(`${process.env.SRC}/modules`);

    dirs.forEach(dir =>
    {
        if (!aliasi.hasOwnProperty(dir)) // lower
        {
            aliasi[dir] = path.resolve(`${process.env.SRC}/modules/${dir}/${dir}`);
        }
    });

    if (__TOOLING__)
    {
        console.log(aliasi);
    }

    return aliasi;
};
