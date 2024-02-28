import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent {

@Input() parentData="";


@Output() public childEve= new EventEmitter();

childMsg="Message from Child ";


sendData(){

  this.childEve.emit(this.childMsg);

}

}
