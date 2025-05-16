import { AuthService } from '@/app/authorization/auth.service'
import { RealEStateService } from '@/app/services/real-estate.service'
import { CommonModule } from '@angular/common'
import { Component, inject, OnInit, ViewChild } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { LogoBoxComponent } from '@component/logo-box.component'
import { AuthenticationService } from '@core/services/auth.service'
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Store } from '@ngrx/store'
import { login } from '@store/authentication/authentication.actions'
import Modal from 'bootstrap/js/dist/modal'

declare var bootstrap: any;
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule
  ],
  templateUrl: './signin.component.html',
  styles: ``,
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup
  submitted: boolean = false
  modalTitle = '';
  modalMessage = '';
  redirectRoute!: string;
  modalType: 'success' | 'danger' = 'success';

  @ViewChild('loginModal') loginModal: any;

  user = {
    email: '',
    password: ''
  };

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private service: RealEStateService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }



  get form() {
    return this.signinForm.controls
  }

  onLogin() {
    this.submitted = true
    if (this.signinForm.valid) {
      const user = {
        email: this.form['email'].value,
        password: this.form['password'].value,
      };

      this.service.login(user).subscribe((data: any) => {
        console.log(data)
        const jwtToken = data.jwtToken;
        const user = data.estateUser;
        const role = user.roles[0].roleName;
        const userId = user.id;
        const userEmail = user.email;

        this.authService.setToken(jwtToken);
        this.authService.setEmail(userEmail);
        this.authService.setRoles(role);
        this.authService.setAgencyData(user); // ✅ store full user

        switch (role) {
          case 'Admin':
            this.showModal('Login Successful', 'Admin have logged in successfully!', '/adminDashboard','success');
            this.router.navigate([]);
            break;
          case 'Agency':
            this.showModal('Login Successful', 'Agency have logged in successfully!', '/agencyDashboard','success');
            this.router.navigate([]);
            break;
          case 'Agent':
            this.showModal('Login Successful', 'Agent have logged in successfully!', '/agentDashboard','success');
            this.router.navigate([]);
            break;
        }
      }, error => {
        this.showModal('Login Failed', 'Invalid email or password. Please try again.', '/sign-in','danger');
      })
    }
  }

  showModal(title: string, message: string, route: string = '', type: 'success' | 'danger' = 'success') {
    this.modalTitle = title;
    this.modalMessage = message;
    this.redirectRoute = route;
    this.modalType = type;

    this.modalService.open(this.loginModal, {
      backdrop: 'static',
      centered: true
    });
  }

  onModalOk(modal: any) {
    modal.close();
    if (this.redirectRoute) {
      this.router.navigate([this.redirectRoute]);
    }
  }

}
