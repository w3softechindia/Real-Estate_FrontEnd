import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';

@Component({
  selector: 'app-agentaddleads',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent],
  templateUrl: './agentaddleads.component.html',
  styleUrl: './agentaddleads.component.scss'
})
export class AgentaddleadsComponent {

}
