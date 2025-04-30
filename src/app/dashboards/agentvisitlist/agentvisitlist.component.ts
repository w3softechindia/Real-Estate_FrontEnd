import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentDataComponent } from '@views/agents/list/components/agent-data/agent-data.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentvisitlist',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule],
  templateUrl: './agentvisitlist.component.html',
  styleUrl: './agentvisitlist.component.scss'
})
export class AgentvisitlistComponent {
  visits = [
    {
      name: 'John Doe',
      property: 'Sunshine Apartments',
      date: '2025-04-25',
      time: '10:00 AM',
      feedback: 'Interested, asked for price negotiation.'
    },
    {
      name: 'Jane Smith',
      property: 'Green Villa',
      date: '2025-04-27',
      time: '02:30 PM',
      feedback: 'Requested a second visit with family.'
    },
    {
      name: 'Michael Johnson',
      property: 'Oceanview Residence',
      date: '2025-04-28',
      time: '11:15 AM',
      feedback: 'Did not show up for the visit.'
    },
    {
      name: 'Emily Brown',
      property: 'Hilltop House',
      date: '2025-04-29',
      time: '09:00 AM',
      feedback: 'Loved the place, planning to proceed.'
    },
    {
      name: 'David Wilson',
      property: 'Palm Grove Villa',
      date: '2025-04-30',
      time: '04:00 PM',
      feedback: 'Looking for similar options nearby.'
    }
  ];
  

}
