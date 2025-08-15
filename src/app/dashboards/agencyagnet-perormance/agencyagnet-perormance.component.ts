import { Component, OnInit } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@/app/authorization/auth.service';
import { RealEStateService } from '@/app/services/real-estate.service';
import { Agent, Review } from '@/app/modals/user.model';

@Component({
  selector: 'app-agencyagnet-perormance',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,CommonModule,FormsModule],
  templateUrl: './agencyagnet-perormance.component.html',
  styleUrl: './agencyagnet-perormance.component.scss'
})
export class AgencyagnetPerormanceComponent implements OnInit {

agencyName: string = '';
 searchText: string = '';
  agents: Agent[] = []; 
   reviewText: string = '';

 constructor(private auth:AuthService,
  private serve:RealEStateService
 ){

 }



  selectedAgent: any = null;
  feedbackText: string = '';
  feedbackSent: boolean = false;

  

    ngOnInit(): void {
     this.agencyName = this.auth.getAgencyName();
     console.log('Agency Name:', this.agencyName);
     this.getAgents();
   }


   getAgents(): void {
    this.serve.getAgentsByAgency(this.agencyName).subscribe(
      (agents: Agent[]) => {
        console.log('Full agent objects:', agents);
        this.agents = agents; // Assign the response to the array
      },
      error => {
        console.error('Error fetching agents:', error);
      }
    );
  }

  selectAgent(agent: any) {
    this.selectedAgent = agent;
    this.feedbackText = ''; // reset feedback when selecting new agent
    this.feedbackSent = false;
  }

  closeDetails() {
    this.selectedAgent = null;
    this.feedbackText = '';
    this.feedbackSent = false;
  }

  get filteredAgents() {
    return this.agents.filter(agent =>
      agent.agentName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // sendFeedback() {
  //   if (!this.feedbackText.trim()) {
  //     return;
  //   }
  //   // You can add API call or service integration here to send feedback

  //   // For now, just simulate feedback sent
  //   this.feedbackSent = true;

  //   // Optionally clear the feedback field after sending
  //   this.feedbackText = '';

  //   // Automatically hide the confirmation after 3 seconds
  //   setTimeout(() => {
  //     this.feedbackSent = false;
  //   }, 3000);
  // }

   sendFeedback() {
    if (!this.selectedAgent || !this.feedbackText.trim()) {
      return;
    }

    const review: Review = {
      reviewText: this.feedbackText.trim(),
      id: 0,
      email: '',
      password: '',
      phoneNumber: '',
      roles: []
    };

    this.serve.postReview(this.selectedAgent.email, review).subscribe({
      next: (res) => {
        console.log('Feedback sent:', res);
        this.feedbackSent = true;
        this.feedbackText = '';
        setTimeout(() => (this.feedbackSent = false), 3000); // hide message after 3s
      },
      error: (err) => {
        console.error('Error sending feedback:', err);
        alert('Failed to send feedback.');
      }
    });
  }

}