import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard {
  constructor(private router: Router, private auth: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRoles = this.auth.getRoles();
    const customerLoggedIn = userRoles.includes('Customer');

    // Check if the user is logged in and their role is LMS Admin
    if (customerLoggedIn) {
      return true;
    } else {
      // Redirect to login page if not authorized
      this.router.navigate(['/login']);
      return false; // Make sure to return false to prevent access
    }
  }
}
