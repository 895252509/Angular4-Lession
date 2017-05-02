import { Injectable } from "@angular/core";

import { Hero } from "./Hero.model";
import { LoggerService } from "./Logger.service";

/**
 * 服务，依赖于其他服务的演示
 * 注入组件类的服务可以在其子组件中使用
 * 因此 logger 的注入是在使用该服务的的组件中注入
 * @Component({
    selector: 'injector-demo',
    templateUrl: 'InjectorDemo.component.html',
    providers:[ InjectorDemoService,LoggerService]
    )}
    export class InjectorDemoComponent{ }
 * 
 */
@Injectable()
export class InjectorDemoService {
    constructor(
        private logger:LoggerService
    ){}

    getHero(){
        this.logger.log('Getting hero ...'); 
        return new Hero(222,'2','2','');
    }
}