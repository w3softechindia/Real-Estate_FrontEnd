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

  followUpToken: any = null;
  followUpRemarks: string = '';

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

  openFollowUp(token: any) {
    this.followUpToken = token;
    this.followUpRemarks = '';
  }

  closeFollowUp() {
    this.followUpToken = null;
  }

  markAsSold() {
    this.followUpToken.status = 'sold';
    this.followUpToken.futureScope = this.followUpRemarks || 'Property sold successfully';
    this.closeFollowUp();
  }

  cancelToken() {
    this.followUpToken.status = 'rejected';
    this.followUpToken.futureScope = this.followUpRemarks || 'Token payment canceled';
    this.closeFollowUp();
  }
}
