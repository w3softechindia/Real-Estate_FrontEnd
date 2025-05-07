import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public userLogout() {
    this.router.navigate(['/auth/sign-in']);
    sessionStorage.removeItem('jwtToken');
    sessionStorage.clear();
    localStorage.clear();
  }

  public setToken(token: string) {
    sessionStorage.setItem('jwtToken', token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem('jwtToken');
  }

  public setRoles(roles: string[]) {
    sessionStorage.setItem('role', JSON.stringify(roles));
  }

  public getRoles(): string[] {
    const rolesString = sessionStorage.getItem('role');
    return rolesString ? JSON.parse(rolesString) : [];
  }

  public setEmail(email: string) {
    sessionStorage.setItem('email', email);
  }

  // public getEmail() {
  //   sessionStorage.getItem('email');
  // }


   // Retrieve email from sessionStorage and return it as a string
   public getEmail(): string {
    return sessionStorage.getItem('email') || ''; // Return empty string if no email is found
  }
  public setUserId(userId: number) {
    sessionStorage.setItem('userId', userId.toString());
  }

  public getUserId(): number | null {
    const value = sessionStorage.getItem('userId');
    return value ? parseInt(value, 10) : null;
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
  getAuthToken(): string {
    return sessionStorage.getItem('jwtToken') || '';
  }






 

  public setAgencyData(user: any) {
    sessionStorage.setItem('estateUser', JSON.stringify(user));
  }
  
  public getAgencyData(): any {
    const userString = sessionStorage.getItem('estateUser');
    return userString ? JSON.parse(userString) : null;
  }
  
  public getAgencyName(): string {
    const user = this.getAgencyData();
    return user && user.agencyName ? user.agencyName : '';
  }
  
  
    
}
