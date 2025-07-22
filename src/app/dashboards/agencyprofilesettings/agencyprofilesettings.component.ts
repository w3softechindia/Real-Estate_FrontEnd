import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule } from '@angular/forms';
import { RealEStateService } from '@/app/services/real-estate.service';
import { AuthService } from '@/app/authorization/auth.service';
import { Agency } from '@/app/modals/user.model';

@Component({
  selector: 'app-agencyprofilesettings',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,FormsModule],
  templateUrl: './agencyprofilesettings.component.html',
  styleUrl: './agencyprofilesettings.component.scss'
})
export class AgencyprofilesettingsComponent {

 agencyEmail: string = '';
  agency: Partial<Agency> = {
    phoneNumber: '',
    agencyAddress: '',
    city: '',
    state: '',
    agencyPinCode: 0
  };

  constructor(
    private service: RealEStateService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.agencyEmail = this.auth.getEmail();
    if (this.agencyEmail) {
      this.service.getAgencyByEmail(this.agencyEmail).subscribe({
        next: (data) => {
          this.agency = {
            phoneNumber: data.phoneNumber,
            agencyAddress: data.agencyAddress,
            city: data.city,
            state: data.state,
            agencyPinCode: data.agencyPinCode
          };
        },
        error: (err) => {
          console.error('Error fetching agency:', err);
        }
      });
    }
  }

  updateAgency() {
    if (this.agencyEmail) {
      this.agency.email = this.agencyEmail; // ✅ Add email before sending
      this.service.updateAgency(this.agencyEmail, this.agency as Agency).subscribe({
        next: () => {
          alert('Agency details updated successfully!');
        },
        error: (err) => {
          console.error('Update failed:', err);
          alert('Failed to update agency details.');
        }
      });
    }
  }

}