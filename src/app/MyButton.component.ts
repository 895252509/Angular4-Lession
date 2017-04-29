import { Component, OnInit ,EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'my-btn',
    templateUrl: 'MyButton.component.html',
    styleUrls:['MyButton.component.css']
})
export class MyBtnComponent implements OnInit {
    @Input() clickSize:number = 0;
    @Output() ievent = new EventEmitter<string>();
    
    //ngClass 的用法
    iclass = {
        btn: true
    }


    constructor() { }

    ngOnInit() {
        if(Number(this.clickSize)!=this.clickSize)
            this.clickSize = 0;//parseInt(this.clickSize.toString());
     }

    onclick(){
        this.clickSize++;
        this.ievent.emit();
    }

    inc(){
        this.clickSize++;
        this.ievent.emit('+');
    }

    dec(){
        this.clickSize--;
        this.ievent.emit('-');
    }

}