import { Lead } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
leads:Lead[]=[];
  // Fixed link (readonly)
  feedbackLink = 'https://docs.google.com/forms/d/1jrzvIr9l1Mfxj6JUXYfFkjaSUg-b5Zg87Ce0KSwWvFA/edit';

  constructor(private service :RealEStateService){}

  ngOnInit():void{
    this.loadLeads();
  }

  selectedUser: any = '';
  message = '';

  sendLink() {
  if (!this.selectedUser) {
    alert('Please select a user first');
    return;
  }

  const payload = {
    email: this.selectedUser,
    feedbackLink: this.feedbackLink
  };

  this.service.sendFeedbackLink(payload).subscribe(
    (response) => {
      alert('✅ Feedback link sent successfully!');
    },
    (error) => {
      console.error('Error sending feedback link:', error);
      alert('❌ Failed to send feedback link.');
    }
  );
}


   loadLeads(){
    this.service.findAllLeads().subscribe(
      (data:Lead[])=>{
        this.leads=data;
      },
      error=>{
        console.error('Error fetching leads', error);
      }
    );
  }
}
