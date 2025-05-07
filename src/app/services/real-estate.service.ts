import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency, Agent, Venture } from '../modals/user.model';
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

  registerVenture(venture:Venture):Observable<any>{
    return this.http.post(`${this.baseUrl}/addVenture`, venture);
  }

  getAllVentures():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/getAllVentures`)
  }




  // -------------------------------------------------------------------------------
  // Agency Operations


 

  addAgent(email: string, agent: Agent): Observable<any> {
    return this.http.post(`${this.baseUrl}/addAgent?email=${email}`, agent);
  }
  
}
