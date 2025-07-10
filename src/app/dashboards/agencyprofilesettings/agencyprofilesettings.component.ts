import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule } from '@angular/forms';
import { RealEStateService } from '@/app/services/real-estate.service';
import { AuthService } from '@/app/authorization/auth.service';

@Component({
  selector: 'app-agencyprofilesettings',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,FormsModule],
  templateUrl: './agencyprofilesettings.component.html',
  styleUrl: './agencyprofilesettings.component.scss'
})
export class AgencyprofilesettingsComponent {
  agencyEmail: string | undefined;



  constructor(private service:RealEStateService,

    private auth:AuthService
    
  ){}


getagencyemail(){
 this.agencyEmail=this.auth.getEmail();
}

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
