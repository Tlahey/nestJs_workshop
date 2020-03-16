import { Logger } from '@nestjs/common';

export class MyLogger extends Logger {
    
    constructor(context: string) {
        super(context);
    }

    log(context: string, message: string, ...args: Array<any>) {
        super.log(MyLogger.concatMessage(message, args), `${this.context}.${context}`);
    }
    error(context: string, message: string, trace: string, ...args: Array<any>) {
        super.error(MyLogger.concatMessage(message, args), trace, `${this.context}.${context}`);
    }
    warn(context: string, message: string, ...args: Array<any>) {
        super.warn(MyLogger.concatMessage(message, args), `${this.context}.${context}`);
    }
    debug(context: string, message: string, ...args: Array<any>) {
        super.debug(MyLogger.concatMessage(message, args), `${this.context}.${context}`);
    }
    verbose(context: string, message: string, ...args: Array<any>) {
        super.verbose(MyLogger.concatMessage(message, args), `${this.context}.${context}`);
    }

    private static concatMessage(message: string, args: Array<any>) {

        const additionalMessage = args.reduce((concat, current) => {
            if (typeof current === "object") {
                concat = `${concat} ${JSON.stringify(current, null, 1)}`
            } else {
                concat = `${concat} ${current}`;
            }
            return concat;
        }, "");

        return `${message} ${additionalMessage}`;
    }
}