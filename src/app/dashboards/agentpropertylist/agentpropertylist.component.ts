import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';
import { Venture } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';

@Component({
  selector: 'app-agentpropertylist',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule],
  templateUrl: './agentpropertylist.component.html',
  styleUrl: './agentpropertylist.component.scss'
})
export class AgentpropertylistComponent {
  ventures: Venture[] = [];
  selectedVenture: Venture | null = null;

  constructor(private service: RealEStateService) {}

  ngOnInit(): void {
    this.getAllVentures();
  }

  getAllVentures() {
    this.service.getAllVentures().subscribe({
      next: (data: Venture[]) => {
        this.ventures = data;
      },
      error: (err) => {
        console.error('Failed to load ventures', err);
      }
    });
  }


 viewDetails(venture: Venture) {
    this.selectedVenture = venture;
  }

  closeModal() {
    this.selectedVenture = null;
  }


}
