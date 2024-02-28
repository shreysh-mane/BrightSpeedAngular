import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TestModule } from './test/test.module';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AddTenPipe} from './pipes/addten.pipe';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DirectivesComponent,
    PipesComponent,
    AddTenPipe,
    ParentcompComponent,
    ChildcompComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
