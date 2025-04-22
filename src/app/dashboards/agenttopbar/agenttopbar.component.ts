import { AuthService } from '@/app/authorization/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agenttopbar',
  standalone: true,
  imports: [],
  templateUrl: './agenttopbar.component.html',
  styleUrl: './agenttopbar.component.scss'
})
export class AgenttopbarComponent {

  constructor(private auth:AuthService){}

  logout() {
   this.auth.userLogout();
  }

}
