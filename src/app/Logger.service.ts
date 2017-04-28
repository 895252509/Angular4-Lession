import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    logs:string[] = [];

    constructor() { }

    log(msg:string){
        this.logs.push(msg);
        console.log(msg);
    }
}