//
// for console debugging, super lightweight
//
export default class Logger
{
    static DEBUG_LEVEL = {
        error: 0,
        warning: 1,
        info: 2,
        debug: 3
    };

    constructor()
    {
        this.debugLevel = Logger.DEBUG_LEVEL.info;

    }

    log (text, level = Logger.debugLevel) {
        if (level <= Logger.debugLevel) {
            console.log(text);
        }
    }

    info (t) {
        log(t, Logger.DEBUG_LEVEL.info);
    }
    debug (t) {
        log(t, Logger.DEBUG_LEVEL.debug);
    }
    
    warning(t) {
        log(t, Logger.DEBUG_LEVEL.warning);
    }

    error (t) { 
        log(t, Logger.DEBUG_LEVEL.error); 
    }
}
    
