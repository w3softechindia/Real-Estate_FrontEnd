import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { Lead } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { subscribeOn } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@/app/authorization/auth.service';

@Component({
  selector: 'app-agentleadslist',
  standalone: true,

  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule,ReactiveFormsModule],

  templateUrl: './agentleadslist.component.html',
  styleUrl: './agentleadslist.component.scss'
})
export class AgentleadslistComponent {

leads:Lead[]=[];
showModal: boolean = false;
selectedLead: any = {};
agentEmail:string='';

leadForm!:FormGroup;

constructor(private service:RealEStateService,private fb:FormBuilder,private authService:AuthService){}

ngOnInit():void{
this.agentEmail=this.authService.getEmail();
this.getAllLeads();
this.initForm();
}

getAllLeads():void{
this.service.getAllLeads(this.agentEmail).subscribe({
  next:(res)=>{
    this.leads=res;
  },error:(err)=>{
    console.error('Failed to fetch leads:', err);
  }
})
}

initForm():void{
  this.leadForm=this.fb.group({
    leadName:['',Validators.required],
    email:['',Validators.required],
    preferredLocation:['',Validators.required],
    phoneNumber:['',Validators.required],
    leadSource:['',Validators.required],
    leadStatus:['',Validators.required],
    estimatedBudget:['',Validators.required],
    interestedIn:['',Validators.required]
  })
}

openUpdateModal(lead: any) {
  console.log("Opening modal with agent data:", lead);
  this.selectedLead = { ...lead };
  this.showModal = true;

  this.leadForm.patchValue({
    leadName:lead.leadName,
    preferredLocation:lead.preferredLocation,
    email:lead.email,
    phoneNumber:lead.phoneNumber,
    leadStatus:lead.leadStatus,
    leadSource:lead.leadSource,
    estimatedBudget:lead.estimatedBudget,
    interestedIn:lead.interestedIn
  })
}

closeModal() {
  this.showModal = false;
  console.log("Modal closed");
}

updateLead():void {
  if(this.leadForm.invalid){
    console.warn('Form is invalid please check all Fields.....');
    return ;
  }

  const updatedLead:Lead={
    ...this.selectedLead,
    ...this.leadForm.value
  }

  this.service.updateLead(updatedLead).subscribe({
   next:(res)=>{
   const index= this.leads.findIndex(lead=>lead.email===updatedLead.email);
     if (index !== -1) {
        this.leads[index] = updatedLead;
      }
      console.log("Lead updated successfully");
      this.closeModal();
    },
    error: (err) => {
      console.error("Failed to update lead:", err);
    }
  });
   
}

deleteLead(lead: Lead): void {
  const confirmDelete = confirm(`Are you sure you want to delete lead: ${lead.leadName}?`);

  if (confirmDelete) {
    this.service.deleteLead(lead).subscribe({
      next: () => {
        // Remove the lead from the local list to reflect UI changes
        this.leads = this.leads.filter(l => l.email !== lead.email);
        console.log(`Lead with email ${lead.email} deleted successfully.`);
      },
      error: (err) => {
        console.error('Failed to delete lead:', err);
        alert('Error occurred while deleting the lead. Please try again.');
      }
    });
  }
}

}
