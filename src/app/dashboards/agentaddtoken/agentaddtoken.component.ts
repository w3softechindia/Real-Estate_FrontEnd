import { Component } from '@angular/core';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { Token, Visit } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators ,FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentaddtoken',
  standalone: true,
  imports: [AgentdashboardComponent,AgenttopbarComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './agentaddtoken.component.html',
  styleUrl: './agentaddtoken.component.scss'
})
export class AgentaddtokenComponent {
visits:Visit[]=[];
tokens:Token[]=[];
showModal: boolean = false;
selectedToken: any = {};
tokenForm!: FormGroup;
minDate!: string;


transactions = ['Cash', 'UPI', 'Credit Card', 'Bank Transfer'];


constructor(private service:RealEStateService,private fb:FormBuilder){}

  ngOnInit():void{
    this.minDate = new Date().toISOString().split('T')[0];  // e.g. "2025-07-29"
    this.initForm();
    this.getAllVisits();
  }

private initForm(): void {
  this.tokenForm = this.fb.group({
    amount: ['', Validators.required],
    transactionMode: ['', Validators.required],
    deadline:['',Validators.required],
    agentName:['',Validators.required]
  });
}
  getAllVisits():void{
   this.service.getAllVisits().subscribe({
    next:(res)=>{
      
      this.visits=res.filter(v=>v.status==='Token');
      console.log(this.visits)
      
    },
    error:(err)=>{
      console.error('Failed to load Vists:',err);
    }

   })

  }


  openSendModal(Visit: any) {
    this.initForm();
    console.log(this.tokenForm.value) ;
  this.selectedToken = { ...Visit ,
    leadId:Visit.lead.leadId
  };
  this.showModal = true;
  // existing value, or today if it’s already past
  const old = Visit.tokenDeadLine;
  const today = this.minDate;
  const initialDeadline = (old && old >= today) ? old : today;
  this.tokenForm.patchValue({
    amount: Visit.amount ?? '',
    transactionMode: Visit.transactionMode ?? '',
    deadline:Visit.tokenDeadLine ??'',
    agentName:Visit.agentName ?? ''
  });
}

  closePropertyModal(){
    this.showModal = false;
    this.tokenForm.reset();
  }

   sendToken() {
  if (this.tokenForm.invalid) return;

  const formData = this.tokenForm.value;
  
  const tokenToSend: Token = {
    ...this.selectedToken,
    amount: formData.amount,
    transactionMode: formData.transactionMode,
    tokenDeadLine: formData.deadline,
    agentName:formData.agentName,
    lead: this.selectedToken.lead
  };

  const leadId=this.selectedToken.lead.leadId;
  this.service.addToken(leadId, tokenToSend).subscribe({
    next: (res) => {
      console.log('Token sent successfully', res);
      alert('Token sent successfully');
      this.closePropertyModal();
    },
    error: (err) => console.error('Error sending token', err)
  });
}




}
