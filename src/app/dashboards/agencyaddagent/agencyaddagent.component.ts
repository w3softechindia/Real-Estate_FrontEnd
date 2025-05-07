import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";

@Component({
  selector: 'app-agencyaddagent',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencyaddagent.component.html',
  styleUrl: './agencyaddagent.component.scss'
})
export class AgencyaddagentComponent {

}
