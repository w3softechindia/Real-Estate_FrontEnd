import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentposts',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule],
  templateUrl: './agentposts.component.html',
  styleUrl: './agentposts.component.scss'
})
export class AgentpostsComponent {
postList = [
    {
      title: 'New Policy Launch',
      message: 'We are launching a new health insurance policy.',
      department: 'Marketing',
      audience: 'All Agents',
      postedBy: 'John Doe',
      activeFrom: '2025-07-01'
    },
    {
      title: 'System Maintenance',
      message: 'Portal will be down for maintenance on Sunday.',
      department: 'IT',
      audience: 'All Users',
      postedBy: 'Jane Smith',
      activeFrom: '2025-07-05'
    },
    {
      title: 'New Agent Training',
      message: 'Mandatory training session for new agents.',
      department: 'HR',
      audience: 'New Agents',
      postedBy: 'HR Admin',
      activeFrom: '2025-07-10'
    }
  ];

}
