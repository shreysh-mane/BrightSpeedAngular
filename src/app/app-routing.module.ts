import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Servicedemo1Component } from './servicedemo1/servicedemo1.component';
import { Servicedemo2Component } from './servicedemo2/servicedemo2.component';

const routes: Routes = [
  {path:'service1',component:Servicedemo1Component},
  {path:'service2',component:Servicedemo2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
