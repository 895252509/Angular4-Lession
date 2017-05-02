
import { Injectable } from '@angular/core';

import { LoggerService } from "./Logger.service";

@Injectable()
export class BetterLoggerService extends LoggerService {

    constructor() {
        super();
     }

    log(msg:string){
        this.logs.push(msg);
        console.log('from Betterlogger->'+msg);
    }
}