import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title.component";
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AgencyComponent } from "../../../dashboards/agency/agency.component";
import { AgencyDataComponent } from "./agency-data/agency-data.component";
import { SearchService } from '@/app/services/search-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
   standalone: true,
   imports: [PageTitleComponent, NgbDropdownModule, AgencyDataComponent, FormsModule],
   templateUrl: './list.component.html',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListComponent {

  searchTerm: string = '';
  constructor(private searchService:SearchService){}

  onSearchChange(term: string) {
    console.log('Search term:', term);
    this.searchService.updateSearchTerm(term);
  }
  
}
