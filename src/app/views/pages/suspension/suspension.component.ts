import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-suspension',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './suspension.component.html',
  styleUrl: './suspension.component.scss'
})
export class SuspensionComponent {
exitLetterForm!:FormGroup;


  agents = [
    { agentId: 'A101', agentName: 'Sai Kamal', agentEmail: 'sai.kamal@example.com' },
    { agentId: 'A102', agentName: 'Rohit Sharma', agentEmail: 'rohit.sharma@example.com' },
    { agentId: 'A103', agentName: 'Charan Kumar', agentEmail: 'charan.kumar@example.com' }
  ];


constructor(private fb:FormBuilder){
  this.exitLetterForm = this.fb.group({
      agentName: [''],
      agentEmail: [''],
      effectiveDate: [''],
      reason: [''],
      remarks: [''],
      issuedBy: [''],
      issueDate: [''],
      rejoinEligibility: ['']
    });
}
 submitLetter() {
    if (this.exitLetterForm.valid) {
      console.log('exitLetterForm Data:', this.exitLetterForm.value);
      alert('letter submitted successfully!');
    } else {
      alert('Please fill all required fields!');
    }
  }
}
