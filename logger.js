//
// for console debugging, super lightweight
//
export default class Logger
{
    static LOG_LEVEL = {
        error: 0,
        warning: 1,
        info: 2,
        debug: 3
    };

    static level = 0; // default

    static debug (t) {
        if (Logger.level >= Logger.LOG_LEVEL.debug) console.debug(t);
    }
    static info (t) {
        if (Logger.level >= Logger.LOG_LEVEL.info) console.info(t);
    }   
    static warning(t) {
        if (Logger.level >= Logger.LOG_LEVEL.warning) console.warn(t);
    }
    static error (t) { 
        if (Logger.level >= Logger.LOG_LEVEL.error) console.error(t);
    }
}