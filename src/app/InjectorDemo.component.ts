import { Component, OnInit } from '@angular/core';

import { InjectorDemoService } from "./InjectorDemo.service";
import { Hero } from "./Hero.model";
import { LoggerService } from "./Logger.service";
import { BetterLoggerService } from "./BetterLogger.service";
import { NewLoggerService } from "./NewLogger.service";

/**
 * 试验依赖注入相关
 * 
 */
@Component({
    selector: 'injector-demo',
    templateUrl: 'InjectorDemo.component.html',
    providers:[ InjectorDemoService,LoggerService,NewLoggerService,
        { provide:LoggerService ,useClass:BetterLoggerService}, 
        //当注入器请求一个 LoggerService 时，将注入一个 BetterLoggerService
        { provide:LoggerService,useExisting:NewLoggerService}
        //当注入器请求一个新的服务， 可以通过只配置上面的provide 来用一个新的服务替换旧的
        
         ]
})
export class InjectorDemoComponent implements OnInit {
    hero:Hero = new Hero(0,'','');
    constructor( 
        private iservice:InjectorDemoService
    ) { }
    ngOnInit() {
        this.hero = this.iservice.getHero();
     }
}