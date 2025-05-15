
import { Agency } from '@/app/modals/user.model'
import { RealEStateService } from '@/app/services/real-estate.service'
import { SearchService } from '@/app/services/search-service'
import { CommonModule } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { agentData } from '@views/agents/data'
import { Subscription } from 'rxjs'

@Component({
  selector: 'agency-data',
  standalone: true,
  imports: [NgbPaginationModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './agency-data.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AgencyDataComponent implements OnInit {


  agentList = agentData;
  agency: Agency[] = [];
  filteredAgencies: Agency[] = [];
  private searchSub!: Subscription;
  updateAgency!: FormGroup;

  constructor(
    private service: RealEStateService,
    private searchService: SearchService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllAgencies();

    this.searchSub = this.searchService.searchTerm$.subscribe(term => {
      console.log('Filtering for:', term);
      this.filteredAgencies = this.filterAgencies(term);
      console.log('Filtered:', this.filteredAgencies);
    });

    this.updateAgency = this.fb.group({
      agencyName: ['', Validators.required],
      agencyAddress: ['', Validators.required],
      agencyPinCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      fbUrl: ['', Validators.required],
      instagramUrl: ['', Validators.required],
      twitterUrl: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  private getAllAgencies() {
    this.service.getAllAgencies().subscribe((data: Agency[]) => {
      this.agency = data;
      this.page = 1;
      this.filteredAgencies = this.filterAgencies(this.searchService.getSearchTerm());
      console.log('Agencies:', data);
    });
  }

  private filterAgencies(term: string): Agency[] {
    const lowerTerm = term.toLowerCase();
    return this.agency.filter(agency =>
      (agency.agencyName || '').toLowerCase().includes(lowerTerm) ||
      (agency.agencyAddress || '').toLowerCase().includes(lowerTerm) ||
      (agency.email || '').toLowerCase().includes(lowerTerm) ||
      (agency.phoneNumber || '')
    );
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

  updateAgencyDetails(email: string) {
    if (this.updateAgency.valid) {
      const agency = this.updateAgency.value;
      console.log(agency)
      this.service.updateAgency(email, agency).subscribe((data) => {
        alert("Updated Successfully..!!");
        window.location.reload();
      }, (error) => {
        console.log(error);
      })
    } else {
      console.warn(this.updateAgency.errors)
    }
  }

  deleteAgency(email: string) {
    this.service.deleteAgency(email).subscribe((data) => {
      alert('Agency Deleted..!!')
      window.location.reload();
    })
  }

  agencies!: Agency;
  showModal = false;
  updateModal = false;
  deleteModal = false;

  openDetailsModal(agencies: Agency): void {
    this.agencies = agencies;
    this.showModal = true;
  }

  openUpdateModal(agencies: Agency): void {
    this.agencies = agencies;
    this.updateModal = true;

    this.updateAgency.patchValue(this.agencies);
  }

  openDeleteModal(agencies: Agency): void {
    this.agencies = agencies;
    this.deleteModal = true;
  }

  goToPlots(ventureId: number): void {
    this.showModal = false; // optional: close modal before navigation
    this.router.navigate(['/plots', ventureId]);
  }

  page = 1;
  pageSize = 7; // or any number of items per page you prefer

  get paginatedAgencies(): Agency[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredAgencies.slice(start, start + this.pageSize);
  }

  onPageChange() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
