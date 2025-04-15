import { Component } from '@angular/core';
import { AgentdashboardComponent } from "../dashboards/agentdashboardsidebar/agentdashboard.component";
import { AgenttopbarComponent } from "../dashboards/agenttopbar/agenttopbar.component";

@Component({
  selector: 'app-shedule',
  standalone: true,
  imports: [AgentdashboardComponent, AgenttopbarComponent],
  templateUrl: './shedule.component.html',
  styleUrl: './shedule.component.scss'
})
export class SheduleComponent {

}
