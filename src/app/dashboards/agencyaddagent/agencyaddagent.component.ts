import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { AuthService } from '@/app/authorization/auth.service';
import { Agent } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agencyaddagent',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent, CommonModule, FormsModule],
  templateUrl: './agencyaddagent.component.html',
  styleUrls: ['./agencyaddagent.component.scss']
})
export class AgencyaddagentComponent {
  emaill: string = '';
  agent: Agent = {
    id: 0,
    email: '',
    password: '',
    phoneNumber: '',
    agentName: '',
    address: '',
    pincode: 0,
    city: '',
    state: '',
    agency: {
      agencyName: this.emaill,
      agencyAddress: '',
      agencyPinCode: 0,
      city: '',
      state: '',
      fbUrl: '',
      instagramUrl: '',
      twitterUrl: '',
      registrationDate: '',
      status: '',
      agents: [],
      id: 0,
      email: '',
      password: '',
      phoneNumber: '',
      roles: []
    },
    registrationDate: '',
    status: 'active',
    customers: [],
    roles: [] // Set a default role for agent
  };

  constructor(
    private auth: AuthService,
    private service: RealEStateService
  ) {}

  ngOnInit(): void {
    this.getUserEmail();
  }

  getUserEmail(): void {
    this.emaill = this.auth.getEmail(); // Assign the returned string value to this.email
    console.log(this.emaill);
  }

  registerAgent(): void {
    this.agent.registrationDate = new Date().toISOString().split('T')[0]; // current date
    this.service.addAgent(this.emaill, this.agent).subscribe({
      next: (response) => {
        console.log('Agent registered successfully!', response);
        alert('Agent registered successfully!');
         // Reload the page after successful registration
      window.location.reload();  // This will reload the page
      },
      error: (err) => {
        console.error('Agent registration failed:', err);
        alert('Agent Resgisterd Already');
      }
    });
  }
}
