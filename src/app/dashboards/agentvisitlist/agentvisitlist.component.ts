import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentDataComponent } from '@views/agents/list/components/agent-data/agent-data.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Visit } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';

@Component({
  selector: 'app-agentvisitlist',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule,FormsModule],
  templateUrl: './agentvisitlist.component.html',
  styleUrl: './agentvisitlist.component.scss'
})
export class AgentvisitlistComponent {

  selectedVisitIndex: number | null = null;
  selectedStatus: string = '';

  visits:Visit[]=[];

  constructor(private service:RealEStateService){}

  ngOnInit():void{
this.getAllVisits();
  }

  getAllVisits():void{
   this.service.getAllVisits().subscribe({
    next:(res)=>{
      this.visits=res;
    },
    error:(err)=>{
      console.error('Failed to load Vists:',err);
    }

   })

  }

onActionClick(index: number) {
  this.selectedVisitIndex = index;
  //this.selectedStatus = this.visits[index].status || '';

}

submitStatus(index: number) {
  if (this.selectedStatus) {
    //this.visits[index].status = this.selectedStatus;
    this.selectedVisitIndex = null;
    this.selectedStatus = '';
  }
}

closePropertyModal() {
  this.selectedVisitIndex = null;
}
  

  

}
