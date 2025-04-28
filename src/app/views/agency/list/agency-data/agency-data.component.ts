import { Agency } from '@/app/modals/user.model'
import { RealEStateService } from '@/app/services/real-estate.service'
import { SearchService } from '@/app/services/search-service'
import { CommonModule } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { agentData } from '@views/agents/data'
import { Subscription } from 'rxjs'

@Component({
  selector: 'agency-data',
  standalone: true,
  imports: [NgbPaginationModule, CommonModule],
  templateUrl: './agency-data.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AgencyDataComponent implements OnInit{
 
  agentList = agentData;
  agency: Agency[] = [];
  filteredAgencies: Agency[] = [];
  private searchSub!: Subscription;

  constructor(
    private service: RealEStateService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getAllAgencies();

    this.searchSub = this.searchService.searchTerm$.subscribe(term => {
      console.log('Filtering for:', term);
      this.filteredAgencies = this.filterAgencies(term);
      console.log('Filtered:', this.filteredAgencies);
    });
  }

  private getAllAgencies() {
    this.service.getAllAgencies().subscribe((data: Agency[]) => {
      this.agency = data;
      this.filteredAgencies = this.filterAgencies(this.searchService.getSearchTerm());
      console.log('Agencies:', data);
    });
  }

  private filterAgencies(term: string): Agency[] {
    const lowerTerm = term.toLowerCase();
    return this.agency.filter(agency =>
      (agency.agencyName || '').toLowerCase().includes(lowerTerm) ||
      (agency.agencyAddress || '').toLowerCase().includes(lowerTerm) ||
      (agency.email || '').toLowerCase().includes(lowerTerm)
    );
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}
