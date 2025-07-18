import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency, Agent, AgentUpdateRequest, Lead, Token, Venture, Visit } from '../modals/user.model';
import { Observable } from 'rxjs';
import { AuthService } from '../authorization/auth.service';
import { token } from 'flatpickr/dist/utils/formatting';


@Injectable({
  providedIn: 'root'
})
export class RealEStateService {

  constructor(private http: HttpClient,private authService:AuthService) { }

  // private baseUrl='http://localhost:8080'

  private baseUrl = "https://realestate-java-684bdd5bd699.herokuapp.com"

  login(user: any) {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  

  registerAgency(agency: Agency): Observable<Agency> {
    return this.http.post<Agency>(`${this.baseUrl}/addAgency`, agency)
  }

  getAllAgencies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllAgencies`);
  }

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllCustomers`)
  }

  getAllAgents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllAgents`)
  }

  registerVenture(venture: any,file:File): Observable<any> {
    const formData = new FormData();
    formData.append('jsonVenture', JSON.stringify(venture));
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/addVenture`, formData);
  }

  getAllVentures(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAllVentures`)
  }

  countOfAgents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countOfAgents`)
  }

  countOfAgencies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countOfAgencies`)
  }

  countOfVentures(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countOfVentures`)
  }

  countOfCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/countOfCustomers`)
  }

  getVentureById(ventureId: number): Observable<any> {
    const params = { ventureId: ventureId.toString() };
    return this.http.get(`${this.baseUrl}/getVenture`, { params });
  }

  updateVenture(id: number, venture: Venture): Observable<any> {
    const params = { id: id.toString() };
    return this.http.put(`${this.baseUrl}/updateVenture`, venture, { params });
  }

  deleteVenture(id: number): Observable<string> {
    const params = { id: id.toString() };
    return this.http.delete(`${this.baseUrl}/deleteVenture`, { params, responseType: 'text' });
  }

  updateAgency(email: string, agency: Agency): Observable<any> {
    const params = { email };
    return this.http.put(`${this.baseUrl}/updateAgency`, agency, { params });
  }

  deleteAgency(email: string): Observable<string> {
    const params = { email };
    return this.http.delete(`${this.baseUrl}/deleteAgency`, { params, responseType: 'text' });
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
  deleteAgent(email: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/deleteAgent?email=${email}`);
  }

  updateAgent(email: string, agentData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<any>(`${this.baseUrl}/updateAgent?email=${email}`, agentData, { headers });
  }


  // ------------------------------------------------------------------------
  //Agent Operations
  
  registerLead(lead: Lead, agentEmail: string): Observable<Lead> {
    const params = new HttpParams().set('agentEmail', agentEmail);
    return this.http.post<Lead>(`${this.baseUrl}/addLead`, lead,{ params });
  }

  getAllLeads(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllLeads`)
  }

  updateLead(lead: Lead): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateLead?email=${lead.email}`, lead)
  }

  deleteLead(lead: Lead): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteLead?email=${lead.email}`, { responseType: 'text' })
  }

  addVisit(visitData:any,leadId:number): Observable<any> {
    return this.http.post(`${this.baseUrl}/addVisit?leadId=${leadId}`, visitData);
  }


  getAllVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(`${this.baseUrl}/getAllVisits`)
  }

  getAgentByEmail(email:string):Observable<any>{
    const params=new HttpParams().set('email',email);
return this.http.get<any>(`${this.baseUrl}/getUserByEmail`,{params})
  }

updateAgentProfile(updatedAgent: AgentUpdateRequest): Observable<Agent> {
 
  return this.http.put<Agent>(
    `${this.baseUrl}/updateAgentProfile?email=${updatedAgent.email}`,
    updatedAgent
  );
}



updateStatus(
  visitId: number,
  payload: { status: string; reason?: string }
): Observable<Visit> {
  let params = new HttpParams()
    .set('visitId', visitId.toString())
    .set('status', payload.status);

    params = params.set('reason', payload.reason??'');
  

  return this.http.put<Visit>(
    `${this.baseUrl}/updateVisitStatus`,
    {},         // empty body
    { params }
  );
}


makePayment(leadId:number,token:Token):Observable<any>{
return this.http.post<any>(`${this.baseUrl}/payment?leadId=${leadId}`,token);
}

getAllTokens():Observable<any>{
  return this.http.get<any>(`${this.baseUrl}/getAllTokens`);
}

}
