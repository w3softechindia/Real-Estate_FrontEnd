import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import type { ChartOptions } from '@common/apexchart.model'
import { NgApexchartsModule } from 'ng-apexcharts'
import { chartOptions, statisticData } from '../../data'
import { CommonModule, DecimalPipe } from '@angular/common'
import { RealEStateService } from '@/app/services/real-estate.service'
import { forkJoin } from 'rxjs'

@Component({
  selector: 'analytics-statistics',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule, DecimalPipe],
  templateUrl: './statistics.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatisticsComponent implements OnInit {
  statisticData = statisticData
  totalCustomersChart = chartOptions
  countOfVentures: number = 0;
  countOfAgencies: number = 0;
  countOfAgents: number = 0;
  countOfCustomers: number = 0;

  constructor(private service: RealEStateService) { }

  ngOnInit(): void {
    this.loadAllCounts();
  }

  loadAllCounts() {
    forkJoin({
      ventures: this.service.countOfVentures(),
      agencies: this.service.countOfAgencies(),
      agents: this.service.countOfAgents(),
      customers: this.service.countOfCustomers()
    }).subscribe(({ ventures, agencies, agents, customers }) => {
      this.countOfVentures = ventures;
      this.countOfAgencies = agencies;
      this.countOfAgents = agents;
      this.countOfCustomers = customers;

      this.updateStatistics();
    });
  }

  updateStatistics() {
    this.statisticData = [
      {
        icon: 'solar:buildings-2-broken',
        title: 'No. of Properties',
        amount: this.countOfVentures.toLocaleString(),
        change: 0,
      },
      {
        icon: 'solar:office-bag-2-broken',
        title: 'No. of Agencies',
        amount: this.countOfAgents.toLocaleString(),
        change: 0,
      },
      {
        icon: 'solar:shield-user-broken',
        title: 'No. of Agents',
        amount: this.countOfAgents.toLocaleString(),
        change: 0,
        // variant: 'danger',
      },
      {
        icon: 'solar:user-id-broken',
        title: 'No. of Customers',
        amount: this.countOfCustomers.toLocaleString(),
        change: 0,
        // variant: 'danger',
      },
      {
        icon: 'solar:money-bag-broken',
        title: 'Revenue',
        amount: '0',
        change: 0,
      },
    ];
  }
}
