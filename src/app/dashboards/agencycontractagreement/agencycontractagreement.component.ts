import { Component } from '@angular/core';
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";

@Component({
  selector: 'app-agencycontractagreement',
  standalone: true,
  imports: [AgencytopbarComponent, AgencyssidebarComponent],
  templateUrl: './agencycontractagreement.component.html',
  styleUrl: './agencycontractagreement.component.scss'
})
export class AgencycontractagreementComponent {

}
