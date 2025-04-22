import { AuthService } from '@/app/authorization/auth.service'
import { RealEStateService } from '@/app/services/real-estate.service'
import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
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
import { Store } from '@ngrx/store'
import { login } from '@store/authentication/authentication.actions'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
],
  templateUrl: './signin.component.html',
  styles: ``,
})
export class SigninComponent implements OnInit{
  signinForm!: FormGroup
  submitted: boolean = false

  user = {
    email: '',
    password: ''
  };

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private service:RealEStateService
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

      this.service.login(user).subscribe((data:any)=>{
        console.log(data)
        const jwtToken = data.jwtToken;
        const user = data.estateUser;
        const role = user.roles[0].roleName;
        const userId = user.id;
        const userEmail= user.email;

        this.authService.setToken(jwtToken);
        this.authService.setEmail(userEmail);
        this.authService.setRoles(role);

        switch (role) {
          case 'Admin':
            alert('Welcome Admin');
            this.router.navigate(['/adminDashboard']);
            break;
          case 'Agency':
            alert('Welcome Agency');
            this.router.navigate(['/agencyDashboard']);
            break;
          case 'Agent':
            alert('Welcome Agent');
            this.router.navigate(['/agentDashboard']);
            break;
          default:
            alert('Invalid Role');
        }
      })
    }
  }

}
