import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agencypostlist',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,CommonModule, FormsModule],
  templateUrl: './agencypostlist.component.html',
  styleUrl: './agencypostlist.component.scss'
})
export class AgencypostlistComponent {
 announcements = [
    {
      id: 1,
      title: 'Team Meeting',
      message: 'There is a team meeting at 3 PM.',
      priority: 'High',
      startDate: '2025-06-19',
      endDate: '2025-06-20',
      audience: 'Developers',
      department: 'IT',
      postedBy: 'HR',
      attachment: ''
    },
    {
      id: 2,
      title: 'Holiday Notice',
      message: 'Office will be closed on 21st June.',
      priority: 'Medium',
      startDate: '2025-06-21',
      endDate: '',
      audience: 'All',
      department: 'Admin',
      postedBy: 'Admin',
      attachment: ''
    }
  ];

  filter = {
    title: '',
    startDate: ''
  };

  editPost: any = null;

  onEdit(post: any) {
    this.editPost = { ...post };
  }

  onCancelEdit() {
    this.editPost = null;
  }

  onSave() {
    const index = this.announcements.findIndex(p => p.id === this.editPost.id);
    if (index !== -1) {
      this.announcements[index] = { ...this.editPost };
    }
    this.editPost = null;
  }

  onDelete(id: number) {
    this.announcements = this.announcements.filter(p => p.id !== id);
  }

  filteredAnnouncements() {
    return this.announcements.filter(post => {
      const titleMatch = this.filter.title
        ? post.title.toLowerCase().includes(this.filter.title.toLowerCase())
        : true;

      const dateMatch = this.filter.startDate
        ? new Date(post.startDate).toDateString() === new Date(this.filter.startDate).toDateString()
        : true;

      return titleMatch && dateMatch;
    });
  }
}
