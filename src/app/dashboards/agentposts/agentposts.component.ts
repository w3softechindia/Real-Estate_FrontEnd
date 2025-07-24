import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { Post } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';

@Component({
  selector: 'app-agentposts',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule],
  templateUrl: './agentposts.component.html',
  styleUrl: './agentposts.component.scss'
})
export class AgentpostsComponent {
posts:Post[]=[];

constructor(private service:RealEStateService){}

  ngOnInit():void{
this.loadPosts();
  }

    loadPosts(): void {
    this.service.getAllPosts().subscribe({
      next: (res) => {
        this.posts = res;
        console.log(this.posts);
      },
      error: (err) => {
        console.error('Failed to load posts:', err);
      }
    });
  }
}
