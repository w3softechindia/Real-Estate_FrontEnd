import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';

@Component({
  selector: 'app-agentanalytics',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent],
  templateUrl: './agentanalytics.component.html',
  styleUrl: './agentanalytics.component.scss'
})
export class AgentanalyticsComponent {

}
