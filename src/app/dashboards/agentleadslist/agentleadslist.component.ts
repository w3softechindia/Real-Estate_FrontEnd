import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentleadslist',
  standalone: true,

  imports: [AgenttopbarComponent,AgentdashboardComponent,CommonModule],

  templateUrl: './agentleadslist.component.html',
  styleUrl: './agentleadslist.component.scss'
})
export class AgentleadslistComponent {
leads=[
  {
    name:'sai',
    location:'Ecil',
    city:'Hyderabad',
    state:"Telangana",
    pincode:500062,
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'9603476942'
  },
  {
    name:'charan',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },
  
  {
    name:'Poorna',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },

  {
    name:'charan',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },
  {
    name:'sai',
    location:'Ecil',
    city:'Hyderabad',
    state:"Telangana",
    pincode:500062,
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'9603476942'
  },
  {
    name:'charan',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },
  
  {
    name:'Poorna',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },

  {
    name:'charan',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },
  {
    name:'charan',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },
  
  {
    name:'Poorna',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  },

  {
    name:'charan',
    location:'SangaReddy',
    city:'Hyderabad',
    state:"Telangana",
    pincode:'000000',
    area:'kushaiguda',
    type:'villa',
    status:'Available',
    phoneNumber:'8919483290'
  }
];
}
