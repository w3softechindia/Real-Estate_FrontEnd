import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agencyagentslist',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent, CommonModule, FormsModule],
  templateUrl: './agencyagentslist.component.html',
  styleUrls: ['./agencyagentslist.component.scss']
})
export class AgencyagentslistComponent {
  viewMode: 'table' | 'grid' = 'table';
  showModal: boolean = false;
  selectedAgent: any = {};

  agencies = [
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      emaill: 'xyz@gmail.com',
      contact: 987654321,
      pincode:67578,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      emaill: 'xyz@gmail.com',
      contact: 987654321,
      pincode:67578,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      emaill: 'xyz@gmail.com',
      contact: 987654321,
      pincode:67578,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      emaill: 'xyz@gmail.com',
      contact: 987654321,
      pincode:67578,
      registrationDate: new Date()
    },
    {
      agentName: 'Jack Doe',
      address: '156Street',
      city: 'York',
      emaill: 'ghyz@gmail.com',
      contact: 98734534321,
      pincode:67548,
      registrationDate: new Date()
    }, {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      emaill: 'xyz@gmail.com',
      contact: 987654321,
      pincode:67578,
      registrationDate: new Date()
    }, {
      agentName: 'Jack Doe',
      address: '156Street',
      city: 'York',
      emaill: 'ghyz@gmail.com',
      contact: 98734534321,
      pincode:67548,
      registrationDate: new Date()
    },
    {
      agentName: 'Phnj Doe',
      address: '156Street',
      city: 'USA',
      emaill: 'ghyz@gmail.com',
      contact: 788566534321,
      pincode:67548,
      registrationDate: new Date()
    },{
      agentName: 'Phnj Doe',
      address: '156Street',
      city: 'USA',
      emaill: 'ghyz@gmail.com',
      contact: 788566534321,
      pincode:67548,
      registrationDate: new Date()
    },{
      agentName: 'Phnj Doe',
      address: '156Street',
      city: 'USA',
      emaill: 'ghyz@gmail.com',
      contact: 788566534321,
      pincode:67548,
      registrationDate: new Date()
    },{
      agentName: 'Phnj Doe',
      address: '156Street',
      city: 'USA',
      emaill: 'ghyz@gmail.com',
      contact: 788566534321,
      pincode:67548,
      registrationDate: new Date()
    },
    
    // More agent data can be added here...
  ];

  toggleViewMode() {
    this.viewMode = this.viewMode === 'table' ? 'grid' : 'table';
  }

  openUpdateModal(agent: any) {
    console.log("Opening modal with agent data:", agent);
    this.selectedAgent = { ...agent };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    console.log("Modal closed");
  }

  updateAgent() {
    console.log("Updating agent:", this.selectedAgent);
    const index = this.agencies.findIndex(agent => agent.emaill === this.selectedAgent.emaill);
    if (index !== -1) {
      this.agencies[index] = { ...this.selectedAgent };
    }
    this.closeModal();
  }

  deleteAgent(agent: any) {
    this.agencies = this.agencies.filter(a => a.emaill !== agent.emaill);
  }
}
