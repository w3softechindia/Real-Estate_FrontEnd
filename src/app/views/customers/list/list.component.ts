import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { PageTitleComponent } from '@component/page-title.component'
import { customerData } from '../data'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { Customer } from '@/app/modals/user.model'
import { RealEStateService } from '@/app/services/real-estate.service'
import { SearchService } from '@/app/services/search-service'
import { Subscription } from 'rxjs'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PageTitleComponent, NgbPaginationModule, NgbDropdownModule, FormsModule],
  templateUrl: './list.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListComponent implements OnInit {
  customerList = customerData
  customers: Customer[] = [];
  searchTerm: string = '';
  filteredCustomers:Customer[]=[];
  private searchSub!: Subscription;

  onSearchChange(term: string) {
    console.log('Search term:', term);
    this.searchService.updateSearchTerm(term);
  }

  ngOnInit(): void {
    this.getAllCustomers();

    this.searchSub = this.searchService.searchTerm$.subscribe(term => {
      console.log('Filtering for:', term);
      this.filteredCustomers = this.filterCustomers(term);
      console.log('Filtered:', this.filteredCustomers);
    });
  }

  constructor(private service: RealEStateService, private searchService: SearchService) { }

  private getAllCustomers() {
    this.service.getAllCustomers().subscribe((data: any[]) => {
      this.customers = data;
      console.log('Customers:', data);

      this.filteredCustomers = this.filterCustomers(this.searchService.getSearchTerm());
    })
  }

   private filterCustomers(term: string): Customer[] {
        const lowerTerm = term.toLowerCase();
        return this.customers.filter(customer =>
          (customer.customerName || '').toLowerCase().includes(lowerTerm) ||
          (customer.address || '').toLowerCase().includes(lowerTerm) ||
          (customer.email || '').toLowerCase().includes(lowerTerm)
        );
      }
    
      ngOnDestroy(): void {
        this.searchSub.unsubscribe();
      }
}
