import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path : 'add' , component: AddStudentComponent},
  {path: 'list', component: ListStudentComponent},
  {path: 'edit/:id', component: EditStudentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: '/login',pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
