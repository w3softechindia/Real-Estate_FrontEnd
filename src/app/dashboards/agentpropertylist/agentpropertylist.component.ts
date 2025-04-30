import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentpropertylist',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule],
  templateUrl: './agentpropertylist.component.html',
  styleUrl: './agentpropertylist.component.scss'
})
export class AgentpropertylistComponent {
  properties = [
    {
      name: 'Sunshine Apartments',
      location: '5th Avenue',
      city: 'New York',
      state: 'NY',
      pincode: '10001',
      price: 250000,
      area: 1200,
      type: 'Residential',
      status: 'Available',
      postedDate: new Date('2025-04-01')
    },
    {
      name: 'Green Villa',
      location: 'Palm Street',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      price: 480000,
      area: 2500,
      type: 'Villa',
      status: 'Sold',
      postedDate: new Date('2025-03-15')
    }
    ,
    {
      name: 'Green Villa',
      location: 'Palm Street',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      price: 480000,
      area: 2500,
      type: 'Villa',
      status: 'Sold',
      postedDate: new Date('2025-03-15')
    }
    ,
    {
      name: 'Green Villa',
      location: 'Palm Street',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      price: 480000,
      area: 2500,
      type: 'Villa',
      status: 'Sold',
      postedDate: new Date('2025-03-15')
    }
    ,
    {
      name: 'Green Villa',
      location: 'Palm Street',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      price: 480000,
      area: 2500,
      type: 'Villa',
      status: 'Sold',
      postedDate: new Date('2025-03-15')
    }
    ,
    {
      name: 'Green Villa',
      location: 'Palm Street',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      price: 480000,
      area: 2500,
      type: 'Villa',
      status: 'Sold',
      postedDate: new Date('2025-03-15')
    }
    ,
    {
      name: 'Green Villa',
      location: 'Palm Street',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      price: 480000,
      area: 2500,
      type: 'Villa',
      status: 'Sold',
      postedDate: new Date('2025-03-15')
    }
    ,
    {
      name: 'Green Villa',
      location: 'Palm Street',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      price: 480000,
      area: 2500,
      type: 'Villa',
      status: 'Sold',
      postedDate: new Date('2025-03-15')
    }
    ,
    // {
    //   name: 'Green Villa',
    //   location: 'Palm Street',
    //   city: 'Los Angeles',
    //   state: 'CA',
    //   pincode: '90001',
    //   price: 480000,
    //   area: 2500,
    //   type: 'Villa',
    //   status: 'Sold',
    //   postedDate: new Date('2025-03-15')
    // }
    // ,
    // {
    //   name: 'Green Villa',
    //   location: 'Palm Street',
    //   city: 'Los Angeles',
    //   state: 'CA',
    //   pincode: '90001',
    //   price: 480000,
    //   area: 2500,
    //   type: 'Villa',
    //   status: 'Sold',
    //   postedDate: new Date('2025-03-15')
    // }
    // ,
    // {
    //   name: 'Green Villa',
    //   location: 'Palm Street',
    //   city: 'Los Angeles',
    //   state: 'CA',
    //   pincode: '90001',
    //   price: 480000,
    //   area: 2500,
    //   type: 'Villa',
    //   status: 'Sold',
    //   postedDate: new Date('2025-03-15')
    // }
    // ,
    // {
    //   name: 'Green Villa',
    //   location: 'Palm Street',
    //   city: 'Los Angeles',
    //   state: 'CA',
    //   pincode: '90001',
    //   price: 480000,
    //   area: 2500,
    //   type: 'Villa',
    //   status: 'Sold',
    //   postedDate: new Date('2025-03-15')
    // }
    
  ];

  selectedProperty: any = null;

  // Toggle the detailed view of the property
  toggleView(index: number): void {
    this.selectedProperty = this.selectedProperty === this.properties[index] ? null : this.properties[index];
  }

closePropertyModal() {
  this.selectedProperty = null;
}


}
