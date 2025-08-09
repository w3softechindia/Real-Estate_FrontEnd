import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";

@Component({
  selector: 'app-agency-sold-list',
  standalone: true,
  imports: [FormsModule, CommonModule, AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agency-sold-list.component.html',
  styleUrl: './agency-sold-list.component.scss'
})
export class AgencySoldListComponent {

 searchAgent: string = '';
  searchCustomer: string = '';
  searchDate: string = '';
  selectedProperty: any = null;

  salesTokens = [
    {
      propertyName: 'Green Villas',
      lead: { agentName: 'Ravi Kumar', leadName: 'John Doe' },
      amount: 1250000,
      status: 'booked',
      bookingDate: new Date('2025-07-15'),
      futureScope: 'Agreement pending'
    },
    {
      propertyName: 'Lakeview Heights',
      lead: { agentName: 'Ajay Verma', leadName: 'Rahul Singh' },
      amount: 1450000,
      status: 'booked',
      bookingDate: new Date('2025-07-18'),
      futureScope: 'Full payment due'
    },
    {
      propertyName: 'Sunshine Residency',
      lead: { agentName: 'Anita Sharma', leadName: 'Jane Smith' },
      amount: 890000,
      status: 'sold',
      bookingDate: new Date('2025-07-20'),
      futureScope: 'Sale completed'
    }
  ];

  get filteredSoldProperties() {
    return this.salesTokens
      .filter(token => token.status === 'sold')
      .filter(token => {
        const agentMatch = !this.searchAgent || token.lead.agentName.toLowerCase().includes(this.searchAgent.toLowerCase());
        const customerMatch = !this.searchCustomer || token.lead.leadName.toLowerCase().includes(this.searchCustomer.toLowerCase());
        const dateMatch = !this.searchDate || new Date(token.bookingDate).toISOString().split('T')[0] === this.searchDate;
        return agentMatch && customerMatch && dateMatch;
      });
  }

  viewPropertyDetails(property: any) {
    this.selectedProperty = property;
  }

  closeDetailsModal() {
    this.selectedProperty = null;
  }
}