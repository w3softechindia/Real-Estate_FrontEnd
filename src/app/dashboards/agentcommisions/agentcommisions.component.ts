import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RealEStateService } from '@/app/services/real-estate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentcommisions',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './agentcommisions.component.html',
  styleUrl: './agentcommisions.component.scss'
})
export class AgentcommisionsComponent {
commissionForm!:FormGroup;

constructor(private service:RealEStateService,private fb:FormBuilder){}

ngOnInit():void{
   this.commissionForm=this.fb.group({
      propertyName:['',Validators.required],
      interestedIn:['',Validators.required],
      Location:['',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
      commisionpercentage:['',[Validators.required]]
    })
}

Commission(){
alert('your commission is 10,000');
}


   // convenience getter
  get f() { return this.commissionForm.controls; }
}
