import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'
import { LogoBoxComponent } from '@component/logo-box.component'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [RouterLink, LogoBoxComponent, FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styles: ``,
})
export class PasswordComponent {
  otp!:number;
  email!:string;
  password!:string;
  constructor(private service:RealEStateService){}
  @ViewChild('firstModal') firstModal!: TemplateRef<any>;
   @ViewChild('secondModal') secondModal!: TemplateRef<any>;

   private modalService = inject(NgbModal)
  
    open(content: TemplateRef<any>) {
      this.modalService.open(content)
    }
  
    staticBackdrop(content: TemplateRef<any>) {
      this.modalService.open(content)
    }
  
    openModal(content: TemplateRef<HTMLElement>, options: NgbModalOptions) {
      this.modalService.open(content, options)
    }

    sendOtpToEmail(){
      console.log(this.email);
      this.service.sendOtpToEmail(this.email).subscribe((data)=>{
        console.log(data);
        this.openModal(this.firstModal, { centered: true });
      })
    }

    verifyOtp(){
      this.service.verifyOTP(this.email,this.otp).subscribe((data)=>{
        console.log(data);
         this.openModal(this.secondModal, { centered: true });
      })
    }

    changePassword(){
      this.service.resetPassword(this.email,this.otp,this.password).subscribe((data)=>{
        console.log(data);
        alert('Password Reset Succesfull..!!')
        window.location.reload();
      })
    }
}
