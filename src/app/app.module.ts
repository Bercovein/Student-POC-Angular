import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentsService } from './services/students.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpClientModule
                  ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  AddStudentComponent,
                  NavbarComponent, 
                  ListStudentComponent, EditStudentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentsService]
})
export class AppModule { }
