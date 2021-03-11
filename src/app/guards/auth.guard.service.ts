import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

// STATE
import { AuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean = false;

  constructor(private store: Store, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);

    if (!this.isAuthenticated) {
      return this.router.parseUrl('/login');
    }

    return true;
  }
}
