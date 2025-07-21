import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RealEStateService } from '@/app/services/real-estate.service';
import { AuthService } from '@/app/authorization/auth.service';
import { TokennDto } from '@/app/modals/user.model';

@Component({
  selector: 'app-agencytokenlist',
  standalone: true,
  imports: [CommonModule, AgencyssidebarComponent, AgencytopbarComponent,FormsModule],
  templateUrl: './agencytokenlist.component.html',
  styleUrl: './agencytokenlist.component.scss'
})
export class AgencytokenlistComponent {
 
 tokenList: TokennDto[] = [];
  searchAgent: string = '';
  searchDate: string = '';
  selectedToken: TokennDto | null = null;

  constructor(
    private service: RealEStateService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllTokens();
  }

  getAllTokens(): void {
    this.service.getAllTokensForAgency().subscribe({
      next: res => this.tokenList = res,
      error: err => console.error('Failed to load tokens', err)
    });
  }

  get filteredTokens(): TokennDto[] {
    return this.tokenList.filter(token => {
      const agentMatch = this.searchAgent
        ? token.lead?.agentName?.toLowerCase().includes(this.searchAgent.toLowerCase())
        : true;

      const dateMatch = this.searchDate
        ? new Date(token.tokenDeadLine).toISOString().split('T')[0] === this.searchDate
        : true;

      return agentMatch && dateMatch;
    });
  }

  viewToken(token: TokennDto): void {
    this.selectedToken = token;
  }

  closeModal(): void {
    this.selectedToken = null;
  }

  updateStatus(token: TokennDto, status: 'accepted' | 'rejected'): void {
    this.service.updateTokenStatus(token.tokenid, status).subscribe({
      next: updated => {
        token.agencyStatus = updated.agencyStatus;
      },
      error: err => {
        console.error('Update failed', err);
        alert('Failed to update token status.');
      }
    });
  }


}
