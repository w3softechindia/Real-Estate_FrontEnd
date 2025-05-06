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
  viewMode: 'table' | 'grid' = 'table'; // Default view
  showModal: boolean = false;  // Modal visibility flag
  selectedAgent: any = {};  // Selected agent data for updating

  agencies = [
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      state: 'NY',
      pincode: 12345,
      registrationDate: new Date()
    },
    {
      agentName: 'Jane Smith',
      address: '456 Avenue',
      city: 'Los Angeles',
      state: 'CA',
      pincode: 67890,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      state: 'NY',
      pincode: 12345,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      state: 'NY',
      pincode: 12345,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      state: 'NY',
      pincode: 12345,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      state: 'NY',
      pincode: 12345,
      registrationDate: new Date()
    },
    {
      agentName: 'John Doe',
      address: '123 Street',
      city: 'New York',
      state: 'NY',
      pincode: 12345,
      registrationDate: new Date()
    },
    // More agent data can be added here...
  ];

  // Toggle between table and grid views
  toggleViewMode() {
    this.viewMode = this.viewMode === 'table' ? 'grid' : 'table';
  }

  // Open modal and set the selected agent
  openUpdateModal(agent: any) {
    console.log("Opening modal with agent data:", agent);  // Debugging log
    this.selectedAgent = { ...agent };  // Populate selectedAgent with the agent details
    this.showModal = true;  // Make modal visible
  }

  // Close modal
  closeModal() {
    this.showModal = false;
    console.log("Modal closed");  // Debugging log
  }

  // Handle the update functionality
  updateAgent() {
    console.log("Updating agent:", this.selectedAgent);  // Debugging log
    // Perform the update logic here (e.g., update the agent in the list)
    const index = this.agencies.findIndex(agent => agent.pincode === this.selectedAgent.pincode);
    if (index !== -1) {
      this.agencies[index] = { ...this.selectedAgent };  // Update the agent in the list
    }
    this.closeModal();  // Close the modal after update
  }

  // Delete an agent
  deleteAgent(agent: any) {
    this.agencies = this.agencies.filter(a => a.pincode !== agent.pincode);
  }
}
