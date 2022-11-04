import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  IsLogin = new BehaviorSubject(false);
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let token = localStorage.getItem('token');
      if(token) {
        this.IsLogin.next(true)
        return true;
      }
      this.IsLogin.next(false);
      this.router.navigateByUrl('/auth/login');
      console.log('sssssssss');
      return false;
  }
  
}
