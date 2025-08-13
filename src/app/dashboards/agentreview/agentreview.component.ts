import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agentreview',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './agentreview.component.html',
  styleUrl: './agentreview.component.scss'
})
export class AgentreviewComponent {

  reviewForm!:FormGroup;
  showModal: boolean = false;
  reviews:any[]=[];

  constructor(private fb:FormBuilder){}

  ngOnInit():void{
    this.reviews=[
      {
        postedBy:'w3Agency',
        remarks:'Good',
        date:'29-07-2025'
    },
    {
      postedBy:'w4Agency',
        remarks:'Good',
        date:'31-07-2025'
    },
    {
      postedBy:'KamalAgency',
        remarks:'Need Improvement',
        date:'01-08-2025'
    },
    {
      postedBy:'Purna',
        remarks:'worst..',
        date:'05-08-2025'
    },
  ];
      // ✅ Initialize the form
    this.reviewForm = this.fb.group({
      res: ['', Validators.required]
    });

  }

  openSendModal(token: any) {
    this.showModal = true;
  }

  sendResponse(){
    alert('Remarks Posted....');
     this.showModal = false;
  }

   closePropertyModal(){
    this.showModal = false;
    this.reviewForm.reset();
  }
}
