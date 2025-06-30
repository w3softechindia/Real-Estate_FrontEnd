import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { Lead } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agentaddleads',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './agentaddleads.component.html',
  styleUrl: './agentaddleads.component.scss'
})

export class AgentaddleadsComponent {
   leadForm!:FormGroup

  constructor(private service:RealEStateService,private fb:FormBuilder){}

  ngOnInit():void{
    this.leadForm=this.fb.group({
      leadName:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      email:['',[Validators.required,Validators.email]],
      leadSource:['',Validators.required],
      interestedIn:['',Validators.required],
      preferredLocation:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      estimatedBudget:[0,[Validators.required,Validators.pattern(/^[0-9]+$/)]],
      leadStatus:['',Validators.required],
      followUp:['',Validators.required],
      leadNotes:['',Validators.required]
    })
    
  };

  addLead():void{
  if(this.leadForm.valid){
    this.service.registerLead(this.leadForm.value).subscribe({
      next:(res)=>{
        alert('Lead added successfully');
        this.leadForm.reset();
      },
      error:(err)=>{
        console.error('Error:', err);
          alert('Failed to add lead');
      }
    });
  }else{
    this.leadForm.markAllAsTouched();
  }
  }

   // convenience getter
  get f() { return this.leadForm.controls; }
}

 

