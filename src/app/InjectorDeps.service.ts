import { Injectable } from '@angular/core';
import { Inject } from "@angular/core"; 

import { LoggerService } from "./Logger.service";
import { Hero } from "./Hero.model";
import { HeroInjectionToken } from "./InjectorFactory.service";

@Injectable()
export class InjectDepsService {
    /**
     *    该服务需要两个参数，如果其中某一是对象则必须创建 InjectionToken 令牌来标记
     * 并且该类型必须标记为 Injectable , 因为其构造函数需要参数
     * @param logger 
     * @param hero 
     */
    constructor(
        private logger:LoggerService,
        @Inject(HeroInjectionToken) private hero:Hero) {
    }

    get out(){
        return this.logger.log(this.hero.name);  
    }
}