import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";

@Component({
  selector: 'app-agencyposts',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencyposts.component.html',
  styleUrl: './agencyposts.component.scss'
})
export class AgencypostsComponent {

}
