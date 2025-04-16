import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public userLogout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('jwtToken');
    sessionStorage.clear();
    localStorage.clear();
  }

  public setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  public setRoles(roles: string[]) {
    localStorage.setItem('role', JSON.stringify(roles));
  }

  public getRoles(): string[] {
    const rolesString = localStorage.getItem('role');
    return rolesString ? JSON.parse(rolesString) : [];
  }

  public setEmail(email: string) {
    localStorage.setItem('email', email);
  }

  public getEmail() {
    localStorage.getItem('email');
  }

  public setUserId(userId: number) {
    localStorage.setItem('userId', userId.toString());
  }

  public getUserId(): number | null {
    const value = localStorage.getItem('userId');
    return value ? parseInt(value, 10) : null;
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
  getAuthToken(): string {
    return localStorage.getItem('authToken') || '';
  }
}
