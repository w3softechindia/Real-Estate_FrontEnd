import { Component } from '@angular/core';
import { AgencysidebarComponent } from "../agencysidebar/agencysidebar.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [AgencysidebarComponent, FooterComponent],
  templateUrl: './agency.component.html',
  styleUrl: './agency.component.scss'
})
export class AgencyComponent {

}
