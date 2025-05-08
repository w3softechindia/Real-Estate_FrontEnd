import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { Lead } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { subscribeOn } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agentleadslist',
  standalone: true,

  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule,FormsModule],

  templateUrl: './agentleadslist.component.html',
  styleUrl: './agentleadslist.component.scss'
})
export class AgentleadslistComponent {

leads:Lead[]=[];
showModal: boolean = false;
selectedLead: any = {};

constructor(private service:RealEStateService){}

ngOnInit():void{
this.getAllLeads();
}

getAllLeads():void{
this.service.getAllLeads().subscribe({
  next:(res)=>{
    this.leads=res;
  },error:(err)=>{
    console.error('Failed to fetch leads:', err);
  }
})
}

openUpdateModal(lead: any) {
  console.log("Opening modal with agent data:", lead);
  this.selectedLead = { ...lead };
  this.showModal = true;
}

closeModal() {
  this.showModal = false;
  console.log("Modal closed");
}

deleteLead(lead: any) {
  this.leads = this.leads.filter(a => a.email !== lead.emaill);
}

// updateLead() {
//   console.log("Updating agent:", this.selectedLead);
//   const index = this.leads.findIndex(lead => lead.email === this.selectedLead.emaill);
//   if (index !== -1) {
//     this.leads[index] = { ...this.selectedLead };
//   }
//   this.closeModal();
// }
}
