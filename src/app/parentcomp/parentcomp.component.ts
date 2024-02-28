import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent {

  msg="Msg from Parent";

  childData="";

}
