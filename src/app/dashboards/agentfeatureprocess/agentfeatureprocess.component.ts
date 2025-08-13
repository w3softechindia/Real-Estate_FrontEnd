import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { Visit } from '@/app/modals/user.model';
import { CommonModule } from '@angular/common';
import { RealEStateService } from '@/app/services/real-estate.service';

@Component({
  selector: 'app-agentfeatureprocess',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule],
  templateUrl: './agentfeatureprocess.component.html',
  styleUrl: './agentfeatureprocess.component.scss'
})
export class AgentfeatureprocessComponent {
  visits:Visit[]=[];

    constructor(private service:RealEStateService){}
  
    ngOnInit():void{
  this.getVisitsByStatus();
    }
  
    getVisitsByStatus():void{
  this.service.getVisitsByStatus('Hold').subscribe({
          next:(res)=>{
         this.visits=res;
         },
            error:(err)=>{
           console.error('Failed To load visits with Hold Status',err);
           }
  })

}

}
