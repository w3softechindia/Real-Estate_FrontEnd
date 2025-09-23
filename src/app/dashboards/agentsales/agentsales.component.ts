import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Token, Venture, Visit } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';

@Component({
  selector: 'app-agentsales',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './agentsales.component.html',
  styleUrl: './agentsales.component.scss'
})
export class AgentsalesComponent {

  paymentForm!:FormGroup;
  showModal: boolean = false;
  selectedToken:any={};
  hidePayment:boolean=false;

  constructor(private fb:FormBuilder,private service:RealEStateService){}

tokens:Token[]=[];
ventures: Venture[] = []; 
visits:Visit[]=[]; 

  ngOnInit(): void {
    // Mock dynamic data
   this.getTokens();

      // ✅ Initialize form
    this.paymentForm = this.fb.group({
      amount: [{value:'',disabled:true}, [Validators.required]],
      total:[{value:'',disabled:true},Validators.required],
      due: [{ value: '', disabled: true }],
      transactionMode: ['',]
    });

     this.service.getAllVentures().subscribe((res: any) => {
    this.ventures = res;
    console.log("Loaded Ventures:", this.ventures);
  });
  }

// getTokens(): void {
//   this.service.getAllTokensByAgencyStatus('accepted').subscribe({
//     next: (res) => {
//       this.tokens = res;
//       console.log(res);
//     },
//     error: (err) => {
//       console.error('Failed to fetch tokens:', err);
//     }
//   });
// }

getTokens(): void {
  this.service.getAllTokensByAgencyStatus('accepted').subscribe({
    next: (res: any) => {
      // Map backend objects to include UI-only fields
      this.tokens = res.map((t: Token) => ({
        ...t,
        hidePayment: false,
        balanceAmount: t.balanceAmount ?? 0  // ensure the property exists
      }));
      console.log(this.tokens);
    },
    error: (err) => {
      console.error('Failed to fetch tokens:', err);
    }
  });
}

openSendModal(token: any) {
  this.showModal = true;
  this.selectedToken = token;

    console.log("Selected Token:", token);
  console.log("Token Venture:", token.venture);
  console.log("Token Venture Price:", token.venture?.price);

  const tokenAmount = Number(token.amount) || 0;
  const totalAmount = token.venture ? Number(token.venture.price) : 0;
  const dueAmount = totalAmount - tokenAmount;

  this.paymentForm.patchValue({
    amount: tokenAmount,
    total: totalAmount,
    due: dueAmount >= 0 ? dueAmount : 0
  });

  console.log("Venture Name:", token.venture?.ventureName);
  console.log("Venture Price (Total):", totalAmount);
  console.log("Form Values:", this.paymentForm.getRawValue());
}



    closePropertyModal(){
    this.showModal = false;
    this.paymentForm.reset();
  }

  

//  sendPayment() {
//   const dueAmount = this.paymentForm.getRawValue().due; // balance amount
//   const tokenId = this.selectedToken.tokenid;

//   this.service.updatePayment(tokenId, dueAmount, 'pending').subscribe({
//     next: (res) => {
//       alert('Payment Successful...');

//       // ✅ Update UI
//       this.selectedToken.finalStatus = 'pending';
//       this.selectedToken.balanceAmount = dueAmount;
//       this.selectedToken.hidePayment = true;
//       this.showModal = false;


//     },
//     error: (err) => {
//       console.error('Payment update failed:', err);
//       alert('Payment Failed!');
//     }
//   });
// }

sendPayment() {
  if (!this.selectedToken) return;

  // Get the due amount from the form
  const dueAmount = this.paymentForm.getRawValue().due ?? 0; 
  const tokenId = this.selectedToken.tokenid;

  this.service.updatePayment(tokenId, dueAmount, 'pending').subscribe({
    next: (res) => {
      alert('Payment Successful!');

      // Find the token in the tokens array
      const index = this.tokens.findIndex(t => t.tokenid === tokenId);
      if (index !== -1) {
        // Update UI-only properties
        this.tokens[index].finalStatus = 'pending';
        this.tokens[index].balanceAmount = dueAmount; // ensure it exists in Token interface
        this.tokens[index].hidePayment = true;       // disable the button
      }

      // Close the modal and reset the form
      this.showModal = false;
      this.paymentForm.reset();
    },
    error: (err) => {
      console.error('Payment update failed:', err);
      alert('Payment Failed!');
    }
  });
}


}
