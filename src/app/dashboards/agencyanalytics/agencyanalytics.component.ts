import { Component } from '@angular/core';
import { AgencysidebarComponent } from '../agencysidebar/agencysidebar.component';
import { AgencytopbarComponent } from '../agencytopbar/agencytopbar.component';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";

@Component({
  selector: 'app-agencyanalytics',
  standalone: true,
  imports: [AgentdashboardComponent, AgenttopbarComponent, AgencytopbarComponent, AgencyssidebarComponent],
  templateUrl: './agencyanalytics.component.html',
  styleUrl: './agencyanalytics.component.scss'
})
export class AgencyanalyticsComponent {

}

