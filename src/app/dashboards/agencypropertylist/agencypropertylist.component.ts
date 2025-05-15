import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { RealEStateService } from '@/app/services/real-estate.service';
import { Venture } from '@/app/modals/user.model';

@Component({
  selector: 'app-agencypropertylist',
  standalone: true,
  imports: [CommonModule, AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencypropertylist.component.html',
  styleUrl: './agencypropertylist.component.scss'
})
export class AgencypropertylistComponent {


  viewMode: 'table' | 'grid' = 'table';
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
