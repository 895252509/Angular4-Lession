import { Component, OnInit, Optional } from '@angular/core';

import { InjectorDemoService } from "./InjectorDemo.service";
import { Hero } from "./Hero.model";
import { LoggerService } from "./Logger.service";
import { BetterLoggerService } from "./BetterLogger.service";
import { NewLoggerService } from "./NewLogger.service";
import { InjectDepsService } from "./InjectorDeps.service";
import { injectorFactoryService,injectorHero } from "./InjectorFactory.service";

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
        injectorHero,
        //注入一个已知对象
        injectorFactoryService
        //注入一个通过工厂函数创建的对象
         ]
})
export class InjectorDemoComponent implements OnInit {
    hero:Hero = new Hero(0,'','');
    constructor(
        // 可选的注入，需要 @Optional 注解
        @Optional() private iservice:InjectorDemoService,
        private ifservice:InjectDepsService
    ) { }
    ngOnInit() {
        if(this.iservice)
            this.hero = this.iservice.getHero();
        this.ifservice.out;
     }
}