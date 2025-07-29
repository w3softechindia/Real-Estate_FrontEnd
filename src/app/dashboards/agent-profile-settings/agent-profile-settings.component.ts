import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@/app/authorization/auth.service';
import { RealEStateService } from '@/app/services/real-estate.service';
import { Agent, AgentUpdateRequest } from '@/app/modals/user.model';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-profile-settings',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './agent-profile-settings.component.html',
  styleUrl: './agent-profile-settings.component.scss'
})
export class AgentProfileSettingsComponent {
profileForm!:FormGroup
email!:string;
agent!:Agent;

constructor(private fb:FormBuilder, private auth:AuthService, private service:RealEStateService){}

  ngOnInit() {
    // build your form here
    this.getDetails();
    this.profileForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)],],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)],],
    });
  }


getDetails(){
  this.email=this.auth.getEmail();

  this.service.getAgentByEmail(this.email).subscribe((data)=>{
    this.agent=data;
    this.profileForm.patchValue({
          phoneNumber: this.agent.phoneNumber,
          address:     this.agent.address,
          city:        this.agent.city,
          state:       this.agent.state,
          pincode:     this.agent.pincode,
        });
  })
}

updateProfile():void{
    if (this.profileForm.invalid) {
    this.profileForm.markAllAsTouched(); 
    return;
  }
  const updatedAgent:AgentUpdateRequest={
    email:this.agent.email,
    phoneNumber: this.profileForm.value.phoneNumber,
    address: this.profileForm.value.address,
    city: this.profileForm.value.city,
    state: this.profileForm.value.state,
    pincode: this.profileForm.value.pincode
  };

  this.service.updateAgentProfile(updatedAgent).subscribe({
    next:(response)=>{
      alert('Profile updated successfully!');
      this.agent=response;
    },
    error:(err)=>{
      console.error('Update failed:', err);
      alert('Failed to update profile. Please try again.');
    }
  })
}

   // convenience getter
  get f() { return this.profileForm.controls; }
}
