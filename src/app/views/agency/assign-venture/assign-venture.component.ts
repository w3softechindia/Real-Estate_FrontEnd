import { Agency, Plots, Venture } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';
import { PageTitleComponent } from '@component/page-title.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-assign-venture',
  standalone: true,
  imports: [PageTitleComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './assign-venture.component.html',
  styleUrl: './assign-venture.component.scss'
})
export class AssignVentureComponent implements OnInit {

  assignVentureForm!: FormGroup
  activeAgencies: Agency[] = [];
  activeVentures: Venture[] = [];
  totalPlotsCount = 0;
  assignedPlotsCount = 0;
  unassignedPlotsCount = 0;
  availablePlots: Plots[] = [];

  popupMessage: string | null = null;
  textcolor!: string;
  popupIcon!: SafeHtml;
  popupTitle: string = '';
  popupType: string = '';
  tickIcon!: SafeHtml;
  errorIcon!: SafeHtml;
  isSuccess!: boolean;
  modalTitle = '';
  modalMessage = '';
  modalType: 'success' | 'danger' = 'success';

  @ViewChild('successAlertModal') successAlertModal: any;

  constructor(private fb: FormBuilder, private service: RealEStateService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.assignVentureForm = this.fb.group({
      agencyId: ['', Validators.required],
      ventureId: ['', Validators.required],
      startPlotNumber: ['', Validators.required],
      endPlotNumber: ['', Validators.required]
    });
    this.loadAgencies();
    this.loadVentures();
    this.onVentureChange();
  }

  loadAgencies() {
    this.service.getAllAgencies().subscribe((data) => {
     this.activeAgencies=data.filter((agency)=>agency.status==="ACTIVE");
    })
  }

  loadVentures() {
    this.service.getAllVentures().subscribe((data) => {
      this.activeVentures = data.filter((venture)=> venture.ventureStatus==="ACTIVE");
    })
  }

  onVentureChange() {
    this.assignVentureForm.get('ventureId')?.valueChanges.subscribe((ventureId: number) => {
      if (ventureId) {
        forkJoin([
          this.service.getPlotsDetailsByVentureId(ventureId),
          this.service.getUnAssignedPlots(ventureId)
        ]).subscribe(([plots, unassignedPlots]) => {
          this.totalPlotsCount = plots.countOfPlots;
          this.unassignedPlotsCount = plots.countOfUnAssignedPlots;
          this.assignedPlotsCount = plots.countOfAssignedPlots;
          this.availablePlots = unassignedPlots;
        })
      } else {
        this.totalPlotsCount = 0;
        this.unassignedPlotsCount = 0;
        this.assignedPlotsCount = 0;
        this.availablePlots = [];
      }
    });
  }

  assignVenture() {
    const agencyId = this.assignVentureForm.value.agencyId;
    const ventureId = this.assignVentureForm.value.ventureId;
    const stPlotNum = this.assignVentureForm.value.startPlotNumber;
    const edPlotNum = this.assignVentureForm.value.endPlotNumber;
    this.service.assignVentureWithPlots(agencyId, ventureId, stPlotNum, edPlotNum).subscribe((data) => {
      console.log(data);
      this.showModal('Assign Venture','Assigned Venture Succesfully','success')
    },(error)=>{
      this.showModal('Assign Venture','Something went wrong, Please try again later','danger')
    })
  }

  resetForm() {
    this.assignVentureForm.reset();
    this.availablePlots = [];
    this.totalPlotsCount = 0;
  }

   showModal(title: string, message: string, type: 'success' | 'danger' = 'success') {
    this.modalTitle = title;
    this.modalMessage = message;
    this.modalType = type;

    this.modalService.open(this.successAlertModal, {
      backdrop: 'static',
      centered: true
    });
  }

  onModalOk(modal: any) {
    modal.close();
    this.assignVentureForm.reset();
  }

}
