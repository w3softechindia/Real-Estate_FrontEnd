import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title.component";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AgencyComponent } from "../../../dashboards/agency/agency.component";
import { AgencyDataComponent } from "./agency-data/agency-data.component";

@Component({
  selector: 'app-list',
   standalone: true,
   imports: [PageTitleComponent, NgbDropdownModule, AgencyDataComponent],
   templateUrl: './list.component.html',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListComponent {

}
