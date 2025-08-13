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
  styleUrls: ['./agencysales.component.scss']
})
export class AgencysalesComponent {
  searchAgent = '';
  searchCustomer = '';
  searchDate = '';

  selectedToken: any = null;
  followUpToken: any = null;
  followUpRemarks = '';

  balanceToken: any = null;
  balanceConfirmMessage = '';

  salesTokens = [
    {
      propertyName: 'Green Villas',
      lead: { agentName: 'Ravi Kumar', leadName: 'John Doe' },
      tokenAmount: 500000,
      balanceAmount: 700000,
      totalPrice: 1200000,
      status: 'pending',
      bookingDate: new Date('2025-07-15'),
      futureScope: 'Agreement pending'
    },
    {
      propertyName: 'Lakeview Heights',
      lead: { agentName: 'Ajay Verma', leadName: 'Rahul Singh' },
      tokenAmount: 600000,
      balanceAmount: 0,
      totalPrice: 600000,
      status: 'paid',
      bookingDate: new Date('2025-07-18'),
      futureScope: 'Full payment done'
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

  // DETAILS modal
  viewToken(token: any) {
    this.selectedToken = token;
  }
  closeModal() {
    this.selectedToken = null;
  }

  // FOLLOWUP modal
  openFollowUp(token: any) {
    this.followUpToken = token;
    this.followUpRemarks = '';
  }
  closeFollowUp() {
    this.followUpToken = null;
  }

  // ACCEPT BALANCE modal
  openAcceptBalance(token: any) {
    this.balanceToken = token;
    this.balanceConfirmMessage = '';
  }
  closeBalanceModal() {
    this.balanceToken = null;
    this.balanceConfirmMessage = '';
  }

  get isBackendBalanceMatch(): boolean {
    if (!this.balanceToken) return false;
    const calculatedBalance = this.balanceToken.totalPrice - this.balanceToken.tokenAmount;
    return calculatedBalance === this.balanceToken.balanceAmount;
  }

  get isTotalCorrect(): boolean {
    if (!this.balanceToken) return false;
    return (this.balanceToken.tokenAmount + this.balanceToken.balanceAmount) === this.balanceToken.totalPrice;
  }

  canConfirmBalance(): boolean {
    return this.isBackendBalanceMatch && this.isTotalCorrect;
  }

  acceptBalance() {
    if (!this.canConfirmBalance()) {
      alert('Amounts do not match. Please verify backend data.');
      return;
    }
    this.balanceToken.balanceAmount = 0;
    this.balanceToken.status = 'paid';
    this.balanceToken.futureScope = 'Full payment received';
    this.balanceConfirmMessage = 'Balance confirmed successfully.';
    setTimeout(() => {
      this.closeBalanceModal();
    }, 1000);
  }

  markAsSold() {
    if (!this.followUpToken) return;
    this.followUpToken.status = 'sold';
    this.followUpToken.futureScope = this.followUpRemarks || 'Property sold successfully';
    this.closeFollowUp();
  }

  cancelToken() {
    if (!this.followUpToken) return;
    this.followUpToken.status = 'rejected';
    this.followUpToken.futureScope = this.followUpRemarks || 'Token payment canceled';
    this.closeFollowUp();
  }
}
