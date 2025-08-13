import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agencyagnet-perormance',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,CommonModule,FormsModule],
  templateUrl: './agencyagnet-perormance.component.html',
  styleUrl: './agencyagnet-perormance.component.scss'
})
export class AgencyagnetPerormanceComponent {


 searchText: string = '';

  agents = [
    {
      name: 'Ravi Kumar',
      leadsHandled: 40,
      tokensBooked: 15,
      propertiesSold: 10,
      revenueGenerated: 2500000
    },
    {
      name: 'Ajay Verma',
      leadsHandled: 35,
      tokensBooked: 12,
      propertiesSold: 8,
      revenueGenerated: 1800000
    },
    {
      name: 'Anita Sharma',
      leadsHandled: 50,
      tokensBooked: 20,
      propertiesSold: 15,
      revenueGenerated: 3200000
    },
    {
      name: 'Ravi Kumar',
      leadsHandled: 40,
      tokensBooked: 15,
      propertiesSold: 10,
      revenueGenerated: 2500000
    },
    {
      name: 'Ravi Kumar',
      leadsHandled: 40,
      tokensBooked: 15,
      propertiesSold: 10,
      revenueGenerated: 2500000
    },
    {
      name: 'Ravi Kumar',
      leadsHandled: 40,
      tokensBooked: 15,
      propertiesSold: 10,
      revenueGenerated: 2500000
    },
    {
      name: 'Karthik',
      leadsHandled: 40,
      tokensBooked: 15,
      propertiesSold: 10,
      revenueGenerated: 2500000
    },
  ];

  selectedAgent: any = null;
  feedbackText: string = '';
  feedbackSent: boolean = false;

  ngOnInit() {}

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
      agent.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  sendFeedback() {
    if (!this.feedbackText.trim()) {
      return;
    }
    // You can add API call or service integration here to send feedback

    // For now, just simulate feedback sent
    this.feedbackSent = true;

    // Optionally clear the feedback field after sending
    this.feedbackText = '';

    // Automatically hide the confirmation after 3 seconds
    setTimeout(() => {
      this.feedbackSent = false;
    }, 3000);
  }

}