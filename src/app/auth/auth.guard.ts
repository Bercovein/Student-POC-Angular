import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService : UserService, private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let url: string = state.url;
  
      return this.checkLogin(url);
  }
  
  checkLogin(url:string) : boolean{

<<<<<<< HEAD
    if (localStorage.getItem('token')) { return true; }
=======
    console.log('IsLoggedIn:' + this.userService.token);
    if (this.userService.token) { return true; }
>>>>>>> b486c53275b46893bb524ae0073c752225be2bc0

    // Store the attempted URL for redirecting
    this.userService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
