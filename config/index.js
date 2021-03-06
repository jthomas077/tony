
import dotenvExtended from 'dotenv-extended';
import dotenvExpand from 'dotenv-expand';
import turbo from 'turbocolor';
import notifier from 'node-notifier';
import gulpConfig from '../config/gulp';

/**
 *
 */
dotenvExpand(
    dotenvExtended.load(
    {
        errorOnMissing: true,
        defaults: '.env.base'
    })
);


/**
 *
 */
const args = process.argv.filter(x => x.startsWith('--'));

const consts =
{
    /**
     * Check to see if we are in development mode.
     * This extends to both the toolkit and your project.
     */
    __DEV__: process.env.NODE_ENV !== 'production',

    __QA__: process.env.NODE_ENV === 'production' && args.includes('--qa'),

    /**
     * Check for a request to enable HMR.
     */
    __HMR__: args.includes('--hmr'),

    /**
     * Check for a request to enable tooling mode.
     * Much like __DEV__, but for working on the toolkit.
     */
    __TOOLING__: args.includes('--tooling'),

    /**
     * Check for a request to enable fun mode.
     * Makes things more interesting... =P
     */
    __FUN__: args.includes('--fun'),

    /**
     * Check for a request to enable conf mode.
     * If you're on a conf call, enable this to disable the notifier beep. lol.
     * Also disables the conf call round robin by muting background noise. i.e. screaming kids, dogs barking, wifey ...
     */
    __CONF__: args.includes('--conf')
};

/**
 *
 */
Object.keys(consts).forEach(key => global[key] = consts[key]);


/**
 *
 */
process.env.DEST = (__DEV__) ? process.env.DEV : process.env.BUILD;


/**
 *
 */
global.GULP_TASK = (taskName) => (__FUN__) ? gulpConfig[taskName] : taskName;


/**
 *
 */
const msgs =
{
    DEV_START:
    {
        msg: 'Starting Development Environment...',
        visual: turbo.bgBlue.white,
        notify: true,
        icon: './toolkit/j5.jpg',
        rule: __DEV__
    },

    DEV_LAUNCH:
    {
        msg: 'Running Development Environment...',
        visual: turbo.bgBlue.white,
        notify: true,
        icon: './toolkit/j5.jpg',
        rule: __DEV__
    },

    BUILD:
    {
        msg: 'Running Build...',
        visual: turbo.bgBlue.white,
        notify: true,
        icon: './toolkit/j5.jpg',
        rule: !__DEV__
    },

    BUILD_COMPLETE:
    {
        msg: 'Build Complete! :)',
        visual: turbo.bgGreen.white,
        notify: true,
        icon: './toolkit/j5.jpg',
        rule: !__DEV__
    },

    HMR:
    {
        msg: 'HMR Enabled',
        visual: turbo.bgBlue.white,
        notify: false,
        icon: './toolkit/speedyg.png',
        rule: __HMR__ && __DEV__
    },

    TOOLING:
    {
        msg: 'Tooling Mode Enabled',
        visual: turbo.bgBlue.white,
        notify: true,
        icon: './toolkit/duckyskello.jpg',
        rule: __TOOLING__,
        dump: [global, process]
    },

    FUN:
    {
        msg: 'Fun Mode Enabled =P',
        visual: turbo.bgBlue.white,
        notify: true,
        icon: './toolkit/duckyrubber.jpg',
        rule: __FUN__
    },

    CONF:
    {
        msg: 'Conf Mode Enabled => Shush!',
        visual: turbo.bgBlue.white,
        notify: true,
        icon: './toolkit/shush.jpg',
        rule: __CONF__
    },

    ERROR:
    {
        msg: `YOU HAVE SOME 'SPLAININ TO DO!`,
        visual: turbo.bgRed.white
    }
};

/**
 *
 */
Object.entries(msgs).forEach(([msg, config]) =>
{
    global[msg] = (quackers = config.rule) =>
    {
        if (quackers)
        {
            QUACK(...Object.values(config));

            if (config.hasOwnProperty('dump'))
            {
                config.dump.forEach(dump => console.log(dump));
            }
        }

        return quackers;
    }
});



/**
 *
 */
global.QUACK = (msg, visual, notify = false, icon) =>
{
    if (notify)
    {
        notifier.notify(
        {
            title: `${process.env.APP_NAME}`,
            message: msg,
            contentImage: undefined,
            icon: icon,
            sound: !__CONF__
        });
    }

    msg = `${(__FUN__) ? ` ${process.env.TOOLKIT_BOT_NAME}:`: ''} ${msg.toUpperCase()} `;

    console.log(`\n${(visual) ? visual(msg) : msg}\n`);
};

/**
 *
 */
global.QUACKQUACK = (quack = __FUN__) =>
{
    if (quack)
    {
        console.log(`\n${turbo.bgWhite.blue(` ${process.env.TOOLKIT_BOT_NAME}: QUACK QUACK `)}\n`);

        console.log(`
 >(.)__,  >(.)__,  =(.)__,
  (___~/   (___~/   (___~/
~^~^~^~^~^~^~^~^~^~^~^~^~^~\n`);
    }
};


/**
 *
 */
if (FUN())
{
    setInterval(QUACKQUACK, Math.ceil(Math.random() * (500000 - 50000) + 500000));
}


/**
 *
 */
if (CONF())
{
    console.log(`\n${turbo.bgWhite.blue(` Muting screaming kids, dogs barking, the wifey... `)}\n`);

    setInterval(() =>
    {
        console.log(`\n${turbo.bgWhite.blue(` If you actually pondered on the muting capabilities for a hot sec, you're my new hero! ;) `)}\n`);
    },
    Math.ceil(Math.random() * (500000 - 50000) + 500000));
}


/**
 * In the words of Super Mario, letsa go waa! :)
 */
HMR();
TOOLING();
DEV_START();
BUILD();
