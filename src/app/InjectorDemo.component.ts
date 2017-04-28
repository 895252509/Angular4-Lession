import { Component, OnInit } from '@angular/core';

import { InjectorDemoService } from "./InjectorDemo.service";
import { Hero } from "./Hero.model";
import { LoggerService } from "./Logger.service";
import { BetterLoggerService } from "./BetterLogger.service";
import { NewLoggerService } from "./NewLogger.service";
import { InjectDepsService } from "./InjectorDeps.service";
import { injectorFactoryService,g_hero } from "./InjectorFactory.service";

/**
 * 试验依赖注入相关
 * 
 */
@Component({
    selector: 'injector-demo',
    templateUrl: 'InjectorDemo.component.html',
    providers:[ InjectorDemoService,LoggerService,NewLoggerService,InjectDepsService,Hero,
        { provide:LoggerService ,useClass:BetterLoggerService}, 
        //当注入器请求一个 LoggerService 时，将注入一个 BetterLoggerService
        { provide:LoggerService,useExisting:NewLoggerService},
        //当注入器请求一个新的服务， 可以通过只配置上面的provide 来用一个新的服务替换旧的
        { provide:Hero,useValue:g_hero},
        injectorFactoryService
         ]
})
export class InjectorDemoComponent implements OnInit {
    hero:Hero = new Hero(0,'','');
    constructor( 
        private iservice:InjectorDemoService,
        private ifservice:InjectDepsService
    ) { }
    ngOnInit() {
        this.hero = this.iservice.getHero();
        this.ifservice.out;
     }
}