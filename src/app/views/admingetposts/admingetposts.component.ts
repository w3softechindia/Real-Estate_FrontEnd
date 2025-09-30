import { AuthService } from '@/app/authorization/auth.service';
import { Post } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { consumerMarkDirty } from '@angular/core/primitives/signals';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admingetposts',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './admingetposts.component.html',
  styleUrl: './admingetposts.component.scss'
})
export class AdmingetpostsComponent {
editForm!:FormGroup
showModal = false;
selectedPost: any;
posts:Post[]=[];
adminEmail: string = '';

constructor(private fb:FormBuilder,private service:RealEStateService,private authService:AuthService){}

ngOnInit():void{
  this.adminEmail=this.authService.getEmail();
this.editForm=this.fb.group({
title: ['', Validators.required],
message: ['', Validators.required],
department: ['', Validators.required],
audience: ['',Validators.required],
postedBy: ['', Validators.required],
startDate: ['', Validators.required],
});

this.loadPosts();
}

loadPosts(){
  this.service.getAdminPosts(this.adminEmail).subscribe({
next:(res)=>{
  this.posts=res;
  console.log('Posts Fetched:',this.posts);
},
error:(err)=>{
  console.error('Error Loading Posts :',err);
}
  });
}


 updatePost() {
  if (this.editForm.invalid) {
    this.editForm.markAllAsTouched();
    return;
  }

  const updatedPost = {
    title: this.editForm.value.title,
    message: this.editForm.value.message,
    department: this.editForm.value.department,
    audience: this.editForm.value.audience,
    postedBy: this.editForm.value.postedBy,
    startDate: this.editForm.value.startDate,
    endDate: this.editForm.value.endDate || this.selectedPost.endDate,
    priority: this.editForm.value.priority || this.selectedPost.priority,
    type: this.editForm.value.type || this.selectedPost.type
  };

  this.service.updatePost(this.selectedPost.id, updatedPost).subscribe({
    next: (res) => {
      console.log('Post updated successfully:', res);
      alert('Post updated successfully!');
      this.closeEditModal();
      this.loadPosts(); // refresh posts list
    },
    error: (err) => {
      console.error('Error updating post:', err);
      alert('Failed to update post!');
    }
  });
}


  deletePost(post: Post) {
  this.service.deleteAdminPost(post.id!).subscribe({
next: (res) => {
        // Remove deleted post from local array
        this.posts = this.posts.filter(p => p.id !== post.id);
        console.log('Post deleted:', res);
       
      },
      error: (err) => {
        console.error('Failed to delete post:', err);
      }
  });
}


  openEditModal(post: any) {
    this.selectedPost = post;
    this.editForm.patchValue(post); // fill form with selected post values
    this.showModal = true;
  }

  closeEditModal() {
    this.showModal = false;
    this.editForm.reset();
  }
}
