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

    constructor(level=Logger.DEBUG_LEVEL.info)
    {
        this.debugLevel = level;
    }

    log (text, level = Logger.debugLevel) {
        if (level <= Logger.debugLevel) {
            console.log(text);
        }
    }

    info (t) {
        this.log(t, Logger.DEBUG_LEVEL.info);
    }
    debug (t) {
        this.log(t, Logger.DEBUG_LEVEL.debug);
    }
    
    warning(t) {
        this.log(t, Logger.DEBUG_LEVEL.warning);
    }

    error (t) { 
        this.log(t, Logger.DEBUG_LEVEL.error); 
    }
}
    
