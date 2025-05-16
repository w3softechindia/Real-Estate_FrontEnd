import { Component, OnInit, ViewChild } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title.component";
import { FileUploaderComponent } from "../../../components/file-uploader/file-uploader.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Agency } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { BrowserModule, SafeHtml } from '@angular/platform-browser';
import { CommonModule, NgClass } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [PageTitleComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  registerAgency!: FormGroup
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

  constructor(private service: RealEStateService, private fb: FormBuilder,private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.registerAgency = this.fb.group({
      agencyName: ['', Validators.required],
      agencyAddress: ['', Validators.required],
      agencyPinCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      fbUrl: ['', Validators.required],
      instagramUrl: ['', Validators.required],
      twitterUrl: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  addAgency() {
    console.log("is formvalid", this.registerAgency.valid);
    if (this.registerAgency.valid) {
      const agency = this.registerAgency.value;
      console.log(agency);

      this.service.registerAgency(agency).subscribe((data: any) => {
        console.log('Agency Added Succesfully..!!');
        this.showModal('Agency','Registered Succesfully','success')
      }, (error) => {
        console.log(error);
      })
    } else {
      this.showModal('Agency','Please fill the Register Form with correct values','danger')
    }
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
    this.registerAgency.reset();
  }

  resetForm(){
    this.registerAgency.reset();
  }
}
