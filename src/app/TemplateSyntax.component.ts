import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'template-syntax-demo',
    templateUrl: './TemplateSyntax.component.html',
    styleUrls : ['./TemplateSyntax.component.css']
})

export class TemplateSyntaxDemoComponent implements OnInit {
    //试验差值表达式
    name:string = 'zhouxiang';
    //试验模板引用变量和双向绑定
    ivalue:string = '';
    //试验ngFor
    arrname:Array<object> = ["4",'123',{},Number(2),"2"];
    //
    isSpecial:boolean = true;
    constructor() { }

    ngOnInit() { }

    changeColor(){
        this.isSpecial = !this.isSpecial; 
    }
}