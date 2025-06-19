import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";

@Component({
  selector: 'app-agencyprofilesettings',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencyprofilesettings.component.html',
  styleUrl: './agencyprofilesettings.component.scss'
})
export class AgencyprofilesettingsComponent {

}
