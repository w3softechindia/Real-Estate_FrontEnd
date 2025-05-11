import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@/app/authorization/auth.service';
import { RealEStateService } from '@/app/services/real-estate.service';
import { Agent } from '@/app/modals/user.model';

@Component({
  selector: 'app-agencyagentslist',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent, CommonModule, FormsModule],
  templateUrl: './agencyagentslist.component.html',
  styleUrls: ['./agencyagentslist.component.scss']
})
export class AgencyagentslistComponent {

  viewMode: 'table' | 'grid' = 'table';
  showModal: boolean = false;
  selectedAgent: any = {};

   agencyName: string = '';

   agennts: Agent[] = []; 

   constructor(
     private auth: AuthService,
     private service: RealEStateService
   ) {}
 
   ngOnInit(): void {
     this.agencyName = this.auth.getAgencyName();
     console.log('Agency Name:', this.agencyName);
     this.getAgents();
   }
   



  getAgents(): void {
    this.service.getAgentsByAgency(this.agencyName).subscribe(
      (agents: Agent[]) => {
        console.log('Full agent objects:', agents);
        this.agennts = agents; // Assign the response to the array
      },
      error => {
        console.error('Error fetching agents:', error);
      }
    );
  }



  toggleViewMode() {
    this.viewMode = this.viewMode === 'table' ? 'grid' : 'table';
  }

  openUpdateModal(agent: any) {
    console.log("Opening modal with agent data:", agent);
    this.selectedAgent = { ...agent };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    console.log("Modal closed");
  }

  updateAgent() {
    console.log("Updating agent:", this.selectedAgent);
    const index = this.agennts.findIndex(agent => agent.email === this.selectedAgent.emaill);
    if (index !== -1) {
      this.agennts[index] = { ...this.selectedAgent };
    }
    this.closeModal();
  }

  // deleteAgent(agent: any) {
  //   this.agennts = this.agennts.filter(a => a.email !== agent.emaill);
  // }

 
deleteAgent(agent: any): void {
  this.service.deleteAgent(agent.email).subscribe(
    (response) => {
      console.log('Delete Response:', response); // Log response for debugging
      if (response === 'Agent deleted successfully') {
        this.agennts = this.agennts.filter(a => a.email !== agent.email);
        alert('Agent deleted successfully');
         window.location.reload();
      } else {
        alert('Agent could not be deleted. Please try again.');
      }
    },
    (error) => {
      console.error('Error deleting agent:', error);
      alert('Agent deleted successfully');
       window.location.reload();
    }
  );
}





}
