import { Component, OnInit } from '@angular/core'
import { AgencyssidebarComponent } from '../agencyssidebar/agencyssidebar.component'
import { AgencytopbarComponent } from '../agencytopbar/agencytopbar.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AuthService } from '@/app/authorization/auth.service'
import { RealEStateService } from '@/app/services/real-estate.service'
import { Agent, Review } from '@/app/modals/user.model'

@Component({
  selector: 'app-agencyagnet-perormance',
  standalone: true,
  imports: [
    AgencyssidebarComponent,
    AgencytopbarComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './agencyagnet-perormance.component.html',
  styleUrl: './agencyagnet-perormance.component.scss',
})
export class AgencyagnetPerormanceComponent implements OnInit {
  agencyName: string = ''
  searchText: string = ''
  agents: Agent[] = []
  reviewText: string = ''

  constructor(private auth: AuthService, private serve: RealEStateService) {}

  selectedAgent!: Agent;
  feedbackText: string = ''
  feedbackSent: boolean = false

  agentEmail!:string;
  agencyEmail!:string;

  ngOnInit(): void {
    this.agencyName = this.auth.getAgencyName()
    this.agencyEmail=this.auth.getEmail();
    console.log('Agency Name:', this.agencyName)
    this.getAgents()
  }

  getAgents(): void {
    this.serve.getAgentsByAgency(this.agencyName).subscribe(
      (agents: Agent[]) => {
        console.log('Full agent objects:', agents)
        this.agents = agents // Assign the response to the array
      },
      (error) => {
        console.error('Error fetching agents:', error)
      }
    )
  }


  selectAgent(agent: Agent) {
  this.selectedAgent = agent;
  this.agentEmail = this.selectedAgent.email;   // ✅ Correct place for agent email
  this.feedbackText = ''; // reset feedback when selecting new agent
  this.feedbackSent = false;
}


  closeDetails() {
    this.feedbackText = ''
    this.feedbackSent = false
  }

  get filteredAgents() {
    return this.agents.filter((agent) =>
      agent.agentName.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }

  // sendFeedback() {
  //   if (!this.selectedAgent || !this.feedbackText.trim()) {
  //     return
  //   }

  //   const review = {
  //     reviewText: this.feedbackText.trim(),
  //   }

  //   this.serve.postReview(this.agentEmail,this.agencyEmail,this.feedbackText).subscribe({
  //     next: (res) => {
  //       console.log('Feedback sent:', res)
  //       this.feedbackSent = true
  //       this.feedbackText = ''
  //       setTimeout(() => (this.feedbackSent = false), 3000)
  //     },
  //     error: (err) => {
  //       console.error('Error sending feedback:', err)
  //       alert('Failed to send feedback.')
  //     },
  //   })
  // }

  sendFeedback() {
  if (!this.selectedAgent || !this.feedbackText.trim()) {
    return;
  }

  this.serve.postReview(this.agentEmail, this.agencyEmail, this.feedbackText).subscribe({
    next: (res) => {
      console.log('Feedback sent:', res);
      this.feedbackSent = true;
      this.feedbackText = '';
      setTimeout(() => (this.feedbackSent = false), 3000);
    },
    error: (err) => {
      console.error('Error sending feedback:', err);
      alert('Failed to send feedback.');
    },
  });
}

}
