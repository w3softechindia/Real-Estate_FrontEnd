import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RealEStateService } from '@/app/services/real-estate.service';
import { Lead, Venture } from '@/app/modals/user.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '@/app/authorization/auth.service';

@Component({
  selector: 'app-agentaddvisits',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './agentaddvisits.component.html',
  styleUrl: './agentaddvisits.component.scss'
})
export class AgentaddvisitsComponent {
  visitForm!:FormGroup
  leads:Lead[]=[];
  ventures:Venture[]=[];
  agentEmail:string='';

constructor(private service:RealEStateService,private fb:FormBuilder,private authService:AuthService){}

  ngOnInit():void{
this.agentEmail=this.authService.getEmail();
this.visitForm=this.fb.group({
leadName:['',Validators.required],
propertyType:['',Validators.required],
propertyName:['',Validators.required],
visitDate:['',Validators.required],
visitTime:['',Validators.required],
notes:['',Validators.required],
customerFeedback:['',Validators.required]
});
this.loadLeads();
  }

  addVisit(): void {
  if (this.visitForm.valid) {
    // Extract the lead name from the form
    const selectedLeadName = this.visitForm.value.leadName;

    // Find the lead object by leadName
    const selectedLead = this.leads.find(lead => lead.leadName === selectedLeadName);

    if (!selectedLead) {
      alert('Lead not found!');
      return;
    }

    const leadId = selectedLead.leadId;

    // Prepare the visit object (excluding leadName since it's part of leadId now)
    const visitData = {
      propertyType: this.visitForm.value.propertyType,
      visitDate: this.visitForm.value.visitDate,
      visitTime: this.visitForm.value.visitTime,
      notes: this.visitForm.value.notes,
      customerFeedback: this.visitForm.value.customerFeedback
    };

    // Call the service and pass leadId as request param
    this.service.addVisit(visitData, leadId).subscribe({
      next: (res) => {
        alert('Visit Added Successfully');
        this.visitForm.reset();
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Failed to add visit');
      }
    });

  } else {
    this.visitForm.markAllAsTouched();
  }
}


  loadLeads(){
    this.service.getAllLeads(this.agentEmail).subscribe(
      (data:Lead[])=>{
        this.leads=data;
      },
      error=>{
        console.error('Error fetching leads', error);
      }
    );
  }

   // convenience getter
  get f() { return this.visitForm.controls; }
}
