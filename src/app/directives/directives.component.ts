import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  displayMessage=true;

  selectedOption="option2";

  demoArray:string[]=["A","b","c"];


  colRed:boolean=false;


}
