import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";

@Component({
  selector: 'app-agencysales',
  standalone: true,
  imports: [CommonModule, FormsModule, AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencysales.component.html',
  styleUrl: './agencysales.component.scss'
})
export class AgencysalesComponent {

    searchAgent: string = '';
  searchCustomer: string = '';
  searchDate: string = '';
  selectedToken: any = null;

  salesTokens = [
    {
      propertyName: 'Green Villas',
      lead: { agentName: 'Ravi Kumar', leadName: 'John Doe' },
      amount: 1250000,
      status: 'booked',
      bookingDate: new Date('2025-07-15'),
      futureScope: 'Agreement generation pending'
    },
    {
      propertyName: 'Sunshine Residency',
      lead: { agentName: 'Anita Sharma', leadName: 'Jane Smith' },
      amount: 890000,
      status: 'available',
      bookingDate: new Date('2025-07-20'),
      futureScope: 'Site visit scheduled'
    },
    {
      propertyName: 'Lakeview Heights',
      lead: { agentName: 'Ajay Verma', leadName: 'Rahul Singh' },
      amount: 1450000,
      status: 'booked',
      bookingDate: new Date('2025-07-18'),
      futureScope: 'Payment in progress'
    }
  ];

  get filteredSalesTokens() {
    return this.salesTokens.filter(token => {
      const agentMatch = !this.searchAgent || token.lead.agentName.toLowerCase().includes(this.searchAgent.toLowerCase());
      const customerMatch = !this.searchCustomer || token.lead.leadName.toLowerCase().includes(this.searchCustomer.toLowerCase());
      const dateMatch = !this.searchDate || new Date(token.bookingDate).toISOString().split('T')[0] === this.searchDate;
      return agentMatch && customerMatch && dateMatch;
    });
  }

  viewToken(token: any) {
    this.selectedToken = token;
  }

  closeModal() {
    this.selectedToken = null;
  }

}
