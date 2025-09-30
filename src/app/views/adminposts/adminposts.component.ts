import { AuthService } from '@/app/authorization/auth.service';
import { Post } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageTitleComponent } from '@component/page-title.component'
@Component({
  selector: 'app-adminposts',
  standalone: true,
  imports: [PageTitleComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './adminposts.component.html',
  styleUrl: './adminposts.component.scss'
})
export class AdminpostsComponent {
postForm!:FormGroup
adminEmail:string='';

constructor(private fb:FormBuilder,private service:RealEStateService,private authService:AuthService){}

ngOnInit():void{
this.adminEmail=this.authService.getEmail();
this.postForm=this.fb.group({
title:['',Validators.required],
postType:['',Validators.required],
message:['',Validators.required],
audience:['',Validators.required],
priority: ['', Validators.required],
start:['',Validators.required],
end:['',Validators.required],
department:['',Validators.required],
postedBy:['',Validators.required]
});
  }

  
  submitForm(): void {
    
 if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    const post: Post = {
      title: this.postForm.value.title,
      type: this.postForm.value.postType,
      message: this.postForm.value.message,
      audience: this.postForm.value.audience,
      priority: this.postForm.value.priority,
      startDate: this.postForm.value.start,
      endDate: this.postForm.value.end,
      department: this.postForm.value.department,
      postedBy: this.postForm.value.postedBy
    };

    this.service.addposts(this.adminEmail,post).subscribe({
      next:(response)=>{
        console.log('Post created successfully:', response);
        alert('Post created successfully!');
        this.postForm.reset();
      },error:(err)=>{
         console.error(' Error creating post:', err);
        alert('Error while creating post!');
      }
    });

}
}