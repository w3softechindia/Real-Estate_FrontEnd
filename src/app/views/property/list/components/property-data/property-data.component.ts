import { Venture } from '@/app/modals/user.model'
import { RealEStateService } from '@/app/services/real-estate.service'
import { SearchService } from '@/app/services/search-service'
import { CommonModule, DecimalPipe } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { currency } from '@common/constants'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { propertyData } from '@views/property/data'
import { Subscription } from 'rxjs'

@Component({
  selector: 'property-data',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, NgbDropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './property-data.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PropertyDataComponent {

  ventures: Venture[] = [];
  filteredVentures: Venture[] = [];
  private searchSub!: Subscription;
  updateVenture!: FormGroup;

  constructor(private service: RealEStateService, private searchService: SearchService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllVentures();

    this.searchSub = this.searchService.searchTerm$.subscribe(term => {
      console.log('Filtering for:', term);
      this.filteredVentures = this.filterVentures(term);
      console.log('Filtered:', this.filteredVentures);
    });

    this.updateVenture = this.fb.group({
      ventureName: ['', Validators.required],
      ventureSize: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phno: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pincode: [null, [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    });
  }

  private getAllVentures() {
    this.service.getAllVentures().subscribe((data: any[]) => {
      this.ventures = data;
      this.page = 1; // reset to first page
      this.filteredVentures = this.filterVentures(this.searchService.getSearchTerm());
    });
  }


  private filterVentures(term: string): Venture[] {
    const lowerTerm = term.toLowerCase();
    return this.ventures.filter(venture =>
      (venture.ventureName || '').toLowerCase().includes(lowerTerm) ||
      (venture.ventureSize || '').toLowerCase().includes(lowerTerm) ||
      (venture.address || '').toLowerCase().includes(lowerTerm) ||
      (venture.city || '').toLowerCase().includes(lowerTerm)
    );
  }

  updateVentureDetails(id: number) {
    console.log(id)
    if (this.updateVenture.valid) {
      const venture = this.updateVenture.getRawValue();
      console.log(venture);
      this.service.updateVenture(id, venture).subscribe((data) => {
        alert("Details updated..!!");
        const index = this.ventures.findIndex(v => v.ventureId === id);
        if (index !== -1) {
          this.ventures[index] = { ...this.ventures[index], ...venture };
        }
        this.filteredVentures = this.filterVentures(this.searchService.getSearchTerm());
        this.updateModal=false;
      })
    } else {
      alert('Please fill all required inputs')
    }
  }

  deleteVenture(id: number) {
    this.service.deleteVenture(id).subscribe((data) => {
      console.log(data);
      alert('venture deleted..!!!')
      this.ventures = this.ventures.filter(venture => venture.ventureId !== id);
      this.filteredVentures = this.filterVentures(this.searchService.getSearchTerm());
      this.deleteModal = false;
    })
  }

  venture!: Venture;
  showModal = false;
  updateModal = false;
  deleteModal = false;

  openDetailsModal(venture: Venture): void {
    this.venture = venture;
    this.showModal = true;
  }

  openUpdateModal(venture: Venture): void {
    this.venture = venture;
    this.updateModal = true;
    this.updateVenture.patchValue(this.venture);
  }

  openDeleteModal(venture: Venture): void {
    this.venture = venture;
    this.deleteModal = true;
  }

  goToPlots(ventureId: number): void {
    this.showModal = false; // optional: close modal before navigation
    this.router.navigate(['/plots', ventureId]);
  }

  page = 1;
  pageSize = 7; // or any number of items per page you prefer

  get paginatedVentures(): Venture[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredVentures.slice(start, start + this.pageSize);
  }

  onPageChange() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
