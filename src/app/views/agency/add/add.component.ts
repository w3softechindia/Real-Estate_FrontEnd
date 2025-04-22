import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from "../../../components/page-title.component";
import { FileUploaderComponent } from "../../../components/file-uploader/file-uploader.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Agency } from '@/app/modals/user.model';
import { RealEStateService } from '@/app/services/real-estate.service';
import { BrowserModule, SafeHtml } from '@angular/platform-browser';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [PageTitleComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit{
  registerAgency!: FormGroup
  popupMessage: string | null = null;
  textcolor!: string;
  popupIcon!: SafeHtml;
  popupTitle: string = '';
  popupType: string = '';
  tickIcon!: SafeHtml;
  errorIcon!: SafeHtml;
  isSuccess!: boolean;

  constructor(private service: RealEStateService, private fb: FormBuilder) {
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
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  addAgency() {
    console.log("is formvalid",this.registerAgency.valid);
    if (this.registerAgency.valid) {
      const agency = this.registerAgency.value;
      console.log(agency);

      this.service.registerAgency(agency).subscribe((data: any) => {
        console.log('Agency Added Succesfully..!!');
        // this.showSuccess("Agency Registered successfully, Thanks!");
        this.registerAgency.reset();
      },(error)=>{
        console.log(error);
      })
    }else {
      console.log(this.registerAgency.errors);
      // this.showError("Please fill the Register Form with correct values");
    }
  }

  showError(message: string) {
    this.popupType = 'error';
    this.popupIcon = this.errorIcon;
    this.popupTitle = 'Error';
    this.popupMessage = message;
    this.textcolor = 'red';
    this.isSuccess = false;
  }

  showSuccess(message: string) {
    this.popupType = 'success';
    this.popupIcon = this.tickIcon;
    this.popupTitle = 'Success';
    this.popupMessage = message;
    this.textcolor = '#1bbf72';
    this.isSuccess = true;
  }
  closePopup() {
    this.popupMessage = null;
  }
}
