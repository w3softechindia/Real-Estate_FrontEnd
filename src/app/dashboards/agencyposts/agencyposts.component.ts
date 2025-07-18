import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule } from '@angular/forms';
import { RealEStateService } from '@/app/services/real-estate.service';
import { AuthService } from '@/app/authorization/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-agencyposts',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent , FormsModule,NgIf],
  templateUrl: './agencyposts.component.html',
  styleUrl: './agencyposts.component.scss'
})
export class AgencypostsComponent {



  showSuccessPopup: boolean = false;


   post: any = {
    type: '',
    title: '',
    message: '',
    audience: '',
    priority: 'Medium',
    startDate: '',
    endDate: '',
    department: '',
    postedBy: ''
  };

  attachment: File | null = null;
  agencyEmail: string = '';

  constructor(
    private service: RealEStateService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.agencyEmail = this.auth.getEmail();
  }

  handleFile(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.attachment = target.files[0];
    }
  }

  


  submitPost(): void {
  if (!this.agencyEmail) {
    alert('Agency email not found.');
    return;
  }

  this.service.addPost(this.agencyEmail, this.post, this.attachment).subscribe({
    next: () => {
      this.showSuccessPopup = true;
      setTimeout(() => {
        this.showSuccessPopup = false;
      }, 3000); // hide after 3 seconds
      this.resetForm();
    },
    error: (error) => {
      console.error('Error:', error);
      alert('Failed to post announcement.');
    }
  });
}

  resetForm(): void {
    this.post = {
      type: '',
      title: '',
      message: '',
      audience: '',
      priority: 'Medium',
      startDate: '',
      endDate: '',
      department: '',
      postedBy: ''
    };
    this.attachment = null;
  }
 
}
