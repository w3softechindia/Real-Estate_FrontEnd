import { Component } from '@angular/core';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { Visit } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentaddtoken',
  standalone: true,
  imports: [AgentdashboardComponent,AgenttopbarComponent,CommonModule],
  templateUrl: './agentaddtoken.component.html',
  styleUrl: './agentaddtoken.component.scss'
})
export class AgentaddtokenComponent {
 visits:Visit[]=[];

 constructor(private service:RealEStateService){}

  ngOnInit():void{
this.getAllVisits();
  }

  getAllVisits():void{
   this.service.getAllVisits().subscribe({
    next:(res)=>{
      this.visits=res.filter(v=>v.status==='Token');
    },
    error:(err)=>{
      console.error('Failed to load Vists:',err);
    }

   })

  }

}
