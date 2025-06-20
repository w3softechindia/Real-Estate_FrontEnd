import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agencyposts',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent , FormsModule],
  templateUrl: './agencyposts.component.html',
  styleUrl: './agencyposts.component.scss'
})
export class AgencypostsComponent {

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

  handleFile(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.attachment = target.files[0];
    }
  }

  submitPost() {
    console.log("Post Data:", this.post);
    if (this.attachment) {
      console.log("With Attachment:", this.attachment.name);
    }

    alert("Announcement posted successfully!");
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
