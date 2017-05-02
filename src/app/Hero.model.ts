
import { Injectable } from "@angular/core";

@Injectable()
export class Hero{
    constructor(
        public id:number,
        public name:string,
        public power?:string,
        public alterEgo?:string
    ){  }
}