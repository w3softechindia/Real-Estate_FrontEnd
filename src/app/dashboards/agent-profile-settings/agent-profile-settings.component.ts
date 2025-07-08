import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agent-profile-settings',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,ReactiveFormsModule],
  templateUrl: './agent-profile-settings.component.html',
  styleUrl: './agent-profile-settings.component.scss'
})
export class AgentProfileSettingsComponent {
profileForm!:FormGroup
}
