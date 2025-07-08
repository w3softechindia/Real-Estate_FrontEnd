import { Component } from '@angular/core';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { Visit } from '@/app/modals/user.model';
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
showModal: boolean = false;
selectedToken: any = {};
tokenForm!: FormGroup;

transactions = ['Cash', 'UPI', 'Credit Card', 'Bank Transfer'];


constructor(private service:RealEStateService,private fb:FormBuilder){}

  ngOnInit():void{
    this.initForm();
this.getAllVisits();
  }

private initForm(): void {
  this.tokenForm = this.fb.group({
    amount: ['', Validators.required],
    transactionMode: ['', Validators.required]
  });
}
  getAllVisits():void{
   this.service.getAllVisits().subscribe({
    next:(res)=>{
      this.visits=res.filter(v=>v.status==='Token');
    },
    error:(err)=>{
      console.error('Failed to load Vists:',err);
    }

   })

  }

  openSendModal(Visit: any) {
    this.initForm();
  this.selectedToken = { ...Visit };
  this.showModal = true;
  this.tokenForm.patchValue({
    amount: Visit.amount ?? '',
    transactionMode: Visit.transactionMode ?? ''
  });
}

 closeModal() {
    this.showModal = false;
    this.tokenForm.reset();
  }

    sendToken() {
  
  }



}
