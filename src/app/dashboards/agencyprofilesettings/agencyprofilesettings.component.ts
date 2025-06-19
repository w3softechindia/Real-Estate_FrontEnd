import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agencyprofilesettings',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,FormsModule],
  templateUrl: './agencyprofilesettings.component.html',
  styleUrl: './agencyprofilesettings.component.scss'
})
export class AgencyprofilesettingsComponent {

   agency = {
    phoneNumber: '123878680',
    address: '123 Main Street',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: 500001
  };

  updateAgency() {
    console.log('Updated Agency Details:', this.agency);
    alert('Agency details updated successfully!');
    // Optionally send to backend here
  }
}
