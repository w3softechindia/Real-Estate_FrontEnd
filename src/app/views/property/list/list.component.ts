import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PageTitleComponent } from '@component/page-title.component'
import { PropertyDataComponent } from './components/property-data/property-data.component'
import { PropertyStateComponent } from './components/property-state/property-state.component'
import { propertyStatData } from './data'
import { SearchService } from '@/app/services/search-service'
import { FormsModule } from '@angular/forms'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { RealEStateService } from '@/app/services/real-estate.service'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PageTitleComponent, PropertyDataComponent, FormsModule, NgbDropdownModule],
  templateUrl: './list.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListComponent {
  stateList = propertyStatData
  countOfVentures!: number;

  searchTerm: string = '';
  constructor(private searchService: SearchService, private service:RealEStateService) { 
    this.countVentures();
  }

  onSearchChange(term: string) {
    console.log('Search term:', term);
    this.searchService.updateSearchTerm(term);
  }

  private countVentures(){
    this.service.countOfVentures().subscribe((data)=>{
      this.countOfVentures=data;
    })
  }
}
