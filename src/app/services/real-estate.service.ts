import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency, Agent, Lead, Venture, Visit } from '../modals/user.model';
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


  getAgentsByAgency(agencyName: string): Observable<Agent[]> {
    const params = new HttpParams().set('agencyName', agencyName);
    return this.http.get<Agent[]>(`${this.baseUrl}/getAgentsByAgency`, { params });
  }
  







  //Agent Operations
  registerLead(lead:Lead):Observable<any>{
return this.http.post(`${this.baseUrl}/addLead`,lead)
  }

  getAllLeads():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllLeads`)
  }

  updateLead(lead:Lead):Observable<any>{
    return this.http.put(`${this.baseUrl}/updateLead?email=${lead.email}`,lead)
  }

  deleteLead(lead:Lead):Observable<any>{
return this.http.delete(`${this.baseUrl}/deleteLead?email=${lead.email}`,{responseType:'text'})
  }

  addVisit(visit:Visit):Observable<any>{
return this.http.post(`${this.baseUrl}/addVisit`,visit)
  }
 
  getAllVisits():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllVisits`)
  }
}
