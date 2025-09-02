import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { AuthService } from '@/app/authorization/auth.service';
import { RealEStateService } from '@/app/services/real-estate.service';
import { TokennDto } from '@/app/modals/user.model';

@Component({
  selector: 'app-agencysales',
  standalone: true,
  imports: [CommonModule, FormsModule, AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencysales.component.html',
  styleUrls: ['./agencysales.component.scss']
})
export class AgencysalesComponent  implements OnInit{

salesTokens: TokennDto[] = [];

  searchAgent = '';
  searchCustomer = '';
  searchDate = '';

  selectedToken: any = null;
  followUpToken: any = null;
  followUpRemarks = '';

  balanceToken: any = null;
  balanceConfirmMessage = '';




   constructor(
      private service: RealEStateService,
      private auth: AuthService
    ) {}


    ngOnInit(): void {
    this.getAllTokens();
  }

     getAllTokens(): void {
  this.service.getAllTokensForAgency().subscribe({
    next: res => {
      this.salesTokens = res;
      console.log("Tokens fetched successfully:", this.salesTokens);
    },
    error: err => {
      console.error("Failed to load tokens", err);
    }
  });
}



  get filteredSalesTokens() {
    return this.salesTokens.filter(token => {
      const agentMatch = !this.searchAgent || token.lead.agentName.toLowerCase().includes(this.searchAgent.toLowerCase());
      const customerMatch = !this.searchCustomer || token.lead.leadName.toLowerCase().includes(this.searchCustomer.toLowerCase());
      // const dateMatch = !this.searchDate || new Date(token.bookingDate).toISOString().split('T')[0] === this.searchDate;
      // return agentMatch && customerMatch && dateMatch;
       return agentMatch && customerMatch ;
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

 

  // OPEN MODAL
openAcceptBalance(token: TokennDto) {
  this.balanceToken = { ...token }; // copy to avoid mutating list directly
  this.balanceConfirmMessage = '';
}

// CLOSE MODAL
closeBalanceModal() {
  this.balanceToken = null;
  this.balanceConfirmMessage = '';
}

// CALCULATED BALANCE (from backend logic)
get calculatedBalance(): number {
  if (!this.balanceToken) return 0;
  return this.balanceToken.finalAmount - this.balanceToken.amount;
}

// CHECK IF BACKEND BALANCE MATCHES
get isBackendBalanceMatch(): boolean {
  if (!this.balanceToken) return false;
  return this.calculatedBalance === (this.balanceToken.balanceAmount ?? this.calculatedBalance);
}

// CHECK TOTAL
get isTotalCorrect(): boolean {
  if (!this.balanceToken) return false;
  return (this.balanceToken.amount + this.calculatedBalance) === this.balanceToken.finalAmount;
}

// ENABLE CONFIRM
canConfirmBalance(): boolean {
  return this.isBackendBalanceMatch && this.isTotalCorrect;
}

acceptBalance() {
  if (!this.canConfirmBalance()) {
    alert('Amounts do not match. Please verify.');
    return;
  }

  this.service.updateFinalStatus(this.balanceToken.tokenid, 'paid').subscribe({
    next: (res) => {
      console.log('Backend response:', res);
      this.balanceToken.finalStatus = 'paid';
      this.balanceConfirmMessage = 'Balance confirmed and marked as Paid ✅';
       window.location.reload(); // 👈 reloads entire page
      setTimeout(() => this.closeBalanceModal(), 1500);
    },
    error: (err) => {
      console.error('Failed to update final status', err);
      alert('Error updating status. Please try again.');
    }
  });
}



  markAsSold() {
  if (!this.followUpToken) return;

  this.service.updateFinalStatus(this.followUpToken.tokenid, 'sold').subscribe({
    next: (res) => {
      console.log(res); // Backend response
      this.followUpToken.finalStatus = 'sold';
      this.followUpToken.futureScope = this.followUpRemarks || 'Property sold successfully';
      this.closeFollowUp();
    },
    error: (err) => {
      console.error('Failed to mark as sold:', err);
      alert('Error while updating status to sold.');
    }
  });
}

cancelToken() {
  if (!this.followUpToken) return;

  this.service.updateFinalStatus(this.followUpToken.tokenid, 'rejected').subscribe({
    next: (res) => {
      console.log(res); // Backend response
      this.followUpToken.finalStatus = 'rejected';
      this.followUpToken.futureScope = this.followUpRemarks || 'Token payment canceled';
      this.closeFollowUp();
    },
    error: (err) => {
      console.error('Failed to cancel token:', err);
      alert('Error while canceling token.');
    }
  });
}

}