import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
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
    ReactiveFormsModule,
    LogoBoxComponent,
  ],
  templateUrl: './signin.component.html',
  styles: ``,
})
export class SigninComponent {
  signinForm!: UntypedFormGroup
  submitted: boolean = false

  public fb = inject(UntypedFormBuilder)
  store = inject(Store)
  route = inject(Router)
  service = inject(AuthenticationService)


  


  user = {
    email: '',
    password: ''
  };

  constructor() {
    this.signinForm = this.fb.group({
      email: ['user@demo.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    })

    // this.signinForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],  // No default value here
    //   password: ['', [Validators.required]],  // No default value here
    // });
    
  }

  get form() {
    return this.signinForm.controls
  }



  onLogin() {
    this.submitted = true
    if (this.signinForm.valid) {
      const email = this.form['email'].value // Get the username from the form
      const password = this.form['password'].value // Get the password from the form

      console.log(this.user.email); // User email after form submission

      // Login Api
      this.store.dispatch(login({ email: email, password: password }))
    }
  }
  
  
  // onLogin() {
  //   this.submitted = true;

  //   if (this.signinForm.invalid) {
  //     return;
  //   }

  //   const user = {
  //     email: this.signinForm.get('email')?.value,
  //     password: this.signinForm.get('password')?.value,
  //   };

  //   console.log('User Email:', user.email);
  //   console.log('User Password:', user.password);

  //   // Do something with the user object, like dispatching an action
  //   // this.store.dispatch(login({ email: user.email, password: user.password }));
    
  //   // Optionally navigate
  //   this.route.navigate(['/dashboards/analytics']);
  // }


  

}
