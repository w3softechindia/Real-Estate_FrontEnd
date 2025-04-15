import { Component } from '@angular/core';
import { AgentdashboardComponent } from "../agentdashboardsidebar/agentdashboard.component";
import { RouterOutlet } from '@angular/router';
import { AgenttopbarComponent } from "../agenttopbar/agenttopbar.component";

@Component({
  selector: 'app-agentmaindashboard',
  standalone: true,
  imports: [AgentdashboardComponent, RouterOutlet, AgenttopbarComponent],
  templateUrl: './agentmaindashboard.component.html',
  styleUrl: './agentmaindashboard.component.scss'
})
export class AgentmaindashboardComponent {

}
