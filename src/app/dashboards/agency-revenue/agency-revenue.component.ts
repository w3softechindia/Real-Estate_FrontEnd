import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Agent {
  id: number;
  name: string;
  monthlyTarget: number;
  quarterlyTarget: number;
  revenueGenerated: number;
  commission: number;
}
@Component({
  selector: 'app-agency-revenue',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent,CommonModule,FormsModule],
  templateUrl: './agency-revenue.component.html',
  styleUrl: './agency-revenue.component.scss'
})
export class AgencyRevenueComponent {
  searchText = '';
  selectedTargetType: 'monthly' | 'quarterly' | '' = '';
  appliedTargetType: 'monthly' | 'quarterly' | null = null;

  enteredTargetAmount: number | null = null;


  // Review Modal Logic
  showReviewModal = false;
  selectedAgent: Agent | null = null;
  reviewText = '';
  reviewSent = false;

  agents: Agent[] = [
    { id: 1, name: 'Alice Johnson', monthlyTarget: 50000, quarterlyTarget: 150000, revenueGenerated: 52000, commission: 5200 },
    { id: 2, name: 'Bob Smith', monthlyTarget: 60000, quarterlyTarget: 180000, revenueGenerated: 45000, commission: 4500 },
    { id: 3, name: 'Cathy Lee', monthlyTarget: 55000, quarterlyTarget: 165000, revenueGenerated: 56000, commission: 5600 },
    { id: 4, name: 'David Brown', monthlyTarget: 70000, quarterlyTarget: 210000, revenueGenerated: 71000, commission: 7100 },
    { id: 5, name: 'Eva Green', monthlyTarget: 48000, quarterlyTarget: 144000, revenueGenerated: 46000, commission: 4600 }
  ];

  get filteredAgents() {
    const search = this.searchText.toLowerCase();
    return this.agents.filter(a => a.name.toLowerCase().includes(search));
  }

  get totalRevenueGenerated(): number {
    return this.agents.reduce((sum, agent) => sum + agent.revenueGenerated, 0);
  }

  applyTarget() {
    if (this.selectedTargetType && this.enteredTargetAmount && this.enteredTargetAmount > 0) {
      this.appliedTargetType = this.selectedTargetType;
    } else {
      this.appliedTargetType = null;
    }
  }

  getAgentAchievementPercent(agent: Agent): number {
    if (!this.enteredTargetAmount) return 0;
    const percent = (agent.revenueGenerated / this.enteredTargetAmount) * 100;
    return percent > 100 ? 100 : Math.round(percent);
  }

  

  openReview(agent: Agent) {
    this.selectedAgent = agent;
    this.reviewText = '';
    this.reviewSent = false;
    this.showReviewModal = true;
  }

  closeReview() {
    this.showReviewModal = false;
    this.selectedAgent = null;
    this.reviewText = '';
    this.reviewSent = false;
  }

  sendReview() {
    if (this.reviewText.trim()) {
      // Simulate sending review, then show confirmation
      this.reviewSent = true;
      setTimeout(() => this.closeReview(), 2000);
    }
  }

}
