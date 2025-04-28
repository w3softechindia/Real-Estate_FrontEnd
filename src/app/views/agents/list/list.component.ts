import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PageTitleComponent } from '@component/page-title.component'
import { AgentDataComponent } from './components/agent-data/agent-data.component'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { SearchService } from '@/app/services/search-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PageTitleComponent, AgentDataComponent, NgbDropdownModule, FormsModule],
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
