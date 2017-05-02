
import { InjectionToken } from "@angular/core";

import { LoggerService } from "./Logger.service";
import { Hero } from "./Hero.model";
import { InjectorDemoService } from "./InjectorDemo.service";
import { InjectDepsService } from "./InjectorDeps.service";

let injectorFactory = (logger:LoggerService,hero:Hero) => {
    return new InjectDepsService(logger,hero);
};

export let injectorFactoryService= {
    provide:InjectDepsService,
    useFactory:injectorFactory,
    deps:[LoggerService,Hero]
};

let m_hero = new Hero(1,'3333','3333','22222');
export let HeroInjectionToken = new InjectionToken<Hero>('HeroInjectionToken');
//const g_hero = new Hero(  );

export let injectorHero= {
    provide:HeroInjectionToken,
    useValue:m_hero
};