import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcompComponent } from './testcomp/testcomp.component';



@NgModule({
  declarations: [
    TestcompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TestcompComponent
  ]
})
export class TestModule { }
