import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Token } from '@/app/modals/user.model';
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
  }

getTokens(): void {
  this.service.getAllTokensByAgencyStatus('Accepted').subscribe({
    next: (res) => {
      this.tokens = res;
      console.log(res);
    },
    error: (err) => {
      console.error('Failed to fetch tokens:', err);
    }
  });
}


openSendModal(token: any) {
    // Convert to numbers to compute difference
    const totalNum = Number(token.total) || 0;
    const amountNum = Number(token.amount) || 0;
    const due = totalNum - amountNum;

    // Patch values (disabled controls will display but not be editable)
    // patchValue works for disabled controls too
    this.paymentForm.patchValue({
      amount: amountNum,
      total: totalNum,
      due: due >= 0 ? due : 0 // avoid negative due, adjust per your rule
    });

     // Store current token reference so we know which one to update later
  this.selectedToken = token;
    this.showModal = true;
  }


    closePropertyModal(){
    this.showModal = false;
    this.paymentForm.reset();
  }

  sendPayment(){
     alert('payment SuccessFull....');

      // ✅ Update agencyStatus to Pending and disable Payment button
  this.selectedToken.agencyStatus = 'Pending';
this.selectedToken.hidePayment = true;
         this.showModal = false;

  }
}
