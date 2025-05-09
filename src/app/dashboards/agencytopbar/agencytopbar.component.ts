import { AuthService } from '@/app/authorization/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agencytopbar',
  standalone: true,
  imports: [],
  templateUrl: './agencytopbar.component.html',
  styleUrl: './agencytopbar.component.scss'
})
export class AgencytopbarComponent {
    email: string | undefined;


    constructor(private auth:AuthService){

    }


    ngOnInit(): void {
      this.getUserEmail();
    }
  
    getUserEmail(): void {
      this.email = this.auth.getEmail(); // Assign the returned string value to this.email
      console.log(this.email);
    }

    logout() {
      this.auth.userLogout();
    }


  
}
