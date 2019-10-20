import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { StudentsService } from './services/students.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';




@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpClientModule,
                  AppRoutingModule
                  ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  AddStudentComponent,
                  NavbarComponent, 
                  ListStudentComponent, EditStudentComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentsService, UserService]
  
})
export class AppModule { }