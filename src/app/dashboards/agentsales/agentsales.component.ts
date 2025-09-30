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

//  getTokens(): void {
//    this.service.getAllTokensByAgencyStatus('accepted').subscribe({
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
    next: (res) => {
      // Add hidePayment property to every token
      this.tokens = res.map((t: any) => ({
        ...t,
        hidePayment: t.hidePayment ?? false   // default false
      }));
      console.log('Tokens:', this.tokens);
      console.log('response is : ',res);
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
  const dueAmount = this.paymentForm.getRawValue().due;
  const tokenId = this.selectedToken.tokenid;

  this.service.updatePayment(tokenId, dueAmount, 'pending').subscribe({
    next: (res) => {
      alert('Payment Successful...');

      this.tokens = this.tokens.map(token =>
        token.tokenid === tokenId
          ? { ...token, finalStatus: 'pending', balanceAmount: dueAmount, hidePayment: true }
          : token
      );

      console.log("Updated Tokens:", this.tokens);
      this.showModal = false;
    },
    error: (err) => {
      console.error('Payment update failed:', err);
      alert('Payment Failed!');
    }
  });
}



}
