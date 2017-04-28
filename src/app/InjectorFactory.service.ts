
import { LoggerService } from "./Logger.service";
import { Hero } from "./Hero.model";
import { InjectorDemoService } from "./InjectorDemo.service";
import { InjectDepsService } from "./InjectorDeps.service";

let injectorFactory = (logger:LoggerService,hero:Hero) => {
    return new InjectDepsService(logger,hero);
};

export  let injectorFactoryService= {
    provide:InjectDepsService,
    useFactory:injectorFactory,
    deps:[LoggerService,Hero]
};

export let g_hero = new Hero(1,'3333','3333','22222');