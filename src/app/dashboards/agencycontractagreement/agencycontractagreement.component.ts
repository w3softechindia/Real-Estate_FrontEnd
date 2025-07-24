import { Component } from '@angular/core';
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agencycontractagreement',
  standalone: true,
  imports: [AgencytopbarComponent, AgencyssidebarComponent,FormsModule,CommonModule],
  templateUrl: './agencycontractagreement.component.html',
  styleUrl: './agencycontractagreement.component.scss'
})
export class AgencycontractagreementComponent {

    step = 1;
  createdBy = 'Admin';
  today = new Date();

  contract = {
    type: 'Agreement',
    agencyName: '',
    partyB: '',
    startDate: '',
    endDate: '',
    status: 'Draft',
    title: '',
    body: ''
  };

  goToStep(num: number) {
    this.step = num;
  }

  downloadAsPDF() {
    window.print(); // This triggers the browser print → user can choose "Save as PDF"
  }

}
