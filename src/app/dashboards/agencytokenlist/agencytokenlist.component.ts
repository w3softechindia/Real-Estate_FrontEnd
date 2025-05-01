import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";

@Component({
  selector: 'app-agencytokenlist',
  standalone: true,
  imports: [CommonModule, AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencytokenlist.component.html',
  styleUrl: './agencytokenlist.component.scss'
})
export class AgencytokenlistComponent {

  tokenList = [
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 7500,
      agentName: 'Michael Smith',
      customerName: 'David Johnson',
      date: new Date('2025-04-15'),
      details: 'Booking token for property Green Villa'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
    {
      amount: 5000,
      agentName: 'John Doe',
      customerName: 'Emily Clark',
      date: new Date('2025-04-01'),
      details: 'Booking token for property Sunshine Apartments'
    },
  ];
  
  selectedToken: any = null;
  
  viewToken(token: any) {
    this.selectedToken = token;
  }
  
  closeModal() {
    this.selectedToken = null;
  }
  
  acceptToken(token: any) {
    alert(`Token for ${token.customerName} has been accepted.`);
  }
  
  rejectToken(token: any) {
    alert(`Token for ${token.customerName} has been rejected.`);
  }
  
}
