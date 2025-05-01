import { Component } from '@angular/core';
import { AgencyssidebarComponent } from "../agencyssidebar/agencyssidebar.component";
import { AgencytopbarComponent } from "../agencytopbar/agencytopbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agencyagentslist',
  standalone: true,
  imports: [AgencyssidebarComponent, AgencytopbarComponent ,CommonModule],
  templateUrl: './agencyagentslist.component.html',
  styleUrl: './agencyagentslist.component.scss'
})
export class AgencyagentslistComponent {

  // In your agency-list.component.ts
viewMode: 'table' | 'grid' = 'table'; // Default view
agencies = [
  {
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },
  {
    agentName: 'Jane Smith',
    address: '456 Avenue',
    city: 'Los Angeles',
    state: 'CA',
    pincode: 67890,
    registrationDate: new Date()
  },
  {
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },{
    agentName: 'John Doe',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    pincode: 12345,
    registrationDate: new Date()
  },
  // Add more dummy data or real data
];

}
