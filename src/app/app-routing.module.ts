import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path : 'add' , component: AddStudentComponent, canActivate:[AuthGuard]},
  {path: 'list', component: ListStudentComponent, canActivate:[AuthGuard]},
  {path: 'edit/:id', component: EditStudentComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: '/list',pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
