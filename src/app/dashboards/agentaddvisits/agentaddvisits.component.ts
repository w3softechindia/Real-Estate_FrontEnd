import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';

@Component({
  selector: 'app-agentaddvisits',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent],
  templateUrl: './agentaddvisits.component.html',
  styleUrl: './agentaddvisits.component.scss'
})
export class AgentaddvisitsComponent {

}
