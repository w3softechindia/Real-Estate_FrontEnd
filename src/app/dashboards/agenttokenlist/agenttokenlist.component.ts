import { Component } from '@angular/core';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { Token, Visit } from '@/app/modals/user.model';
import { CommonModule } from '@angular/common';
import { RealEStateService } from '@/app/services/real-estate.service';

@Component({
  selector: 'app-agenttokenlist',
  standalone: true,
  imports: [AgentdashboardComponent,AgenttopbarComponent,CommonModule],
  templateUrl: './agenttokenlist.component.html',
  styleUrl: './agenttokenlist.component.scss'
})
export class AgenttokenlistComponent {
tokens:Token[]=[];
visits:Visit[]=[];

constructor(private service:RealEStateService){}

ngOnInit():void{
this.getTokens();
}

getTokens():void{
  this.service.getAllTokens().subscribe({
    next:(res)=>{
      this.tokens=res;
      console.log(this.tokens);
    },error:(err)=>{
      console.error('Failed to fetch tokens:', err);
    }
  })
}
}
