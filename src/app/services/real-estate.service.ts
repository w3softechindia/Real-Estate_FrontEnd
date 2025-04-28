import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '../modals/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEStateService {

  constructor(private http:HttpClient) { }

  private baseUrl='http://localhost:8080'

  login(user: any) {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  registerAgency(agency:Agency):Observable<any>{
    return this.http.post(`${this.baseUrl}/addAgency`,agency)
  }

  getAllAgencies():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/getAllAgencies`);
  }

  getAllCustomers():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/getAllCustomers`)
  }

  getAllAgents():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/getAllAgents`)
  }
}
