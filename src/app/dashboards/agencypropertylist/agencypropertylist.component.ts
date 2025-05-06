import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";

@Component({
  selector: 'app-agencypropertylist',
  standalone: true,
  imports: [CommonModule, AgencyssidebarComponent, AgencytopbarComponent],
  templateUrl: './agencypropertylist.component.html',
  styleUrl: './agencypropertylist.component.scss'
})
export class AgencypropertylistComponent {

  viewMode: 'table' | 'grid' = 'table';
  

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
  },
  // You can add many more properties
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
  },{
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
  }
];


selectedProperty: any = null;

viewDetails(property: any) {
  this.selectedProperty = property;
}

closeModal() {
  this.selectedProperty = null;
}


}
