import { Injectable } from '@angular/core';

import { LoggerService } from "./Logger.service";
import { Hero } from "./Hero.model";

@Injectable()
export class InjectDepsService {

    constructor(
        private logger:LoggerService,
        private hero:Hero) {
    }

    get out(){debugger;
        return this.logger.log(this.hero.name);  
    }
}