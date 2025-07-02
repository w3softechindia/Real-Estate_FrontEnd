import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-agencytokenlist',
  standalone: true,
  imports: [CommonModule, AgencyssidebarComponent, AgencytopbarComponent,FormsModule],
  templateUrl: './agencytokenlist.component.html',
  styleUrl: './agencytokenlist.component.scss'
})
export class AgencytokenlistComponent {


  searchAgent: string = '';
  searchDate: string = ''; // in YYYY-MM-DD format

  tokenList = [
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments',
      status: 'pending'
    },
    {
      amount: 7500,
      agentName: 'Michael Smith',
      customerName: 'David Johnson',
      date: new Date('2025-04-15'),
      details: 'Booking token for property Green Villa',
      status: 'pending'
    },
    {
      amount: 6000,
      agentName: 'Alice Brown',
      customerName: 'Chris Evans',
      date: new Date('2025-04-20'),
      details: 'Booking token for property Ocean Breeze',
      status: 'pending'
    }
    // Add more tokens as needed
  ];

  get filteredTokens() {
    return this.tokenList.filter(token => {
      const matchesAgent = this.searchAgent
        ? token.agentName.toLowerCase().includes(this.searchAgent.toLowerCase())
        : true;

      const matchesDate = this.searchDate
        ? new Date(token.date).toISOString().split('T')[0] === this.searchDate
        : true;

      return matchesAgent && matchesDate;
    });
  }

  selectedToken: any = null;

  viewToken(token: any) {
    this.selectedToken = token;
  }

  closeModal() {
    this.selectedToken = null;
  }

  acceptToken(token: any) {
    token.status = 'accepted';
    alert(`Token for ${token.customerName} has been accepted.`);
  }

  rejectToken(token: any) {
    token.status = 'rejected';
    alert(`Token for ${token.customerName} has been rejected.`);
  }
}
