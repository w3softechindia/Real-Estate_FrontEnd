import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RealEStateService } from '@/app/services/real-estate.service';
import { AuthService } from '@/app/authorization/auth.service';

@Component({
  selector: 'app-agencypostlist',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,CommonModule, FormsModule],
  templateUrl: './agencypostlist.component.html',
  styleUrl: './agencypostlist.component.scss'
})
export class AgencypostlistComponent {
  agencyEmail: string = '';
  announcements: any[] = [];
  editPost: any = null;

  filter = {
    title: '',
    startDate: ''
  };

  constructor(
    private service: RealEStateService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.agencyEmail = this.auth.getEmail();
    this.loadPosts();
  }

  loadPosts(): void {
    this.service.getAllPostsByAgency(this.agencyEmail).subscribe({
      next: (res) => {
        this.announcements = res;
      },
      error: (err) => {
        console.error('Failed to load posts:', err);
      }
    });
  }

  onEdit(post: any) {
    this.editPost = { ...post };
  }

  onCancelEdit() {
    this.editPost = null;
  }
onSave() {
  const updatedPost = {
    type: this.editPost.type,
    title: this.editPost.title,
    message: this.editPost.message,
    audience: this.editPost.audience,
    priority: this.editPost.priority,
    startDate: this.editPost.startDate,
    endDate: this.editPost.endDate,
    department: this.editPost.department,
    postedBy: this.editPost.postedBy
  };

  this.service.updatePost(this.editPost.id, updatedPost).subscribe({
    next: () => {
      const index = this.announcements.findIndex(p => p.id === this.editPost.id);
      if (index !== -1) {
        this.announcements[index] = { ...this.editPost };
      }
      this.editPost = null;
      alert('✅ Post updated successfully');
    },
    error: (err) => {
      console.error('Update failed:', err);
      alert('Failed to update post');
    }
  });
}


  onDelete(id: number) {
    if (!confirm('Are you sure you want to delete this post?')) return;

    this.service.deletePost(id).subscribe({
      next: () => {
        this.announcements = this.announcements.filter(p => p.id !== id);
        alert('Post deleted successfully');
      },
      error: (err) => {
        console.error('Delete failed:', err);
        alert('Failed to delete post');
      }
    });
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
