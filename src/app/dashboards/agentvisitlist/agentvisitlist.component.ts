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
  selectedStatus: 'Not Interested'|'Hold' | 'Token'  = null!;

  visits:Visit[]=[];
  reason:string='';
  holdDate:string='';

  constructor(private service:RealEStateService){}

  ngOnInit():void{
this.getAllVisits();
  }

  getAllVisits():void{
   this.service.getAllVisits().subscribe({
    next:(res)=>{
      this.visits=res;
      console.log(res);
    },
    error:(err)=>{
      console.error('Failed to load Vists:',err);
    }

   })

  }

onActionClick(index: number) {
  this.selectedVisitIndex = index;
  //this.selectedStatus = '';
  this.reason='';
  this.holdDate='';
}

closePropertyModal() {
  this.selectedVisitIndex = null;
}

  
submitStatus(index: number): void {
  const visit = this.visits[index];
  const payload: any = { status: this.selectedStatus };
  if (this.selectedStatus === 'Not Interested') {
    payload.reason = this.reason;
  }
  if (this.selectedStatus === 'Hold') {
    payload.reason = this.holdDate;
  }
  if (this.selectedStatus === 'Token') {
    payload.reason = '';
  }

  this.service.updateStatus(visit.visitId, payload)
    .subscribe({
      next: updated => {
        visit.status = updated.status;
        // whatever string the server returned in `reason`, show it:
        visit.reason = updated.reason || '';
        this.closePropertyModal();
      },
      error: err => console.error('Failed to update status:', err)
    });

}
 

}
