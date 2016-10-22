import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { studentDetailComponent }   from './components/student-detail.component';
import { teacherDetailComponent }   from './components/teacher-detail.component';


import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule , 
  			          FormsModule
  			    ],
  declarations: [ AppComponent,
                  studentDetailComponent,
                  teacherDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
