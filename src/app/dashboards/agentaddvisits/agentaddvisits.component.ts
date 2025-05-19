import { Component } from '@angular/core';
import { AgenttopbarComponent } from '../agenttopbar/agenttopbar.component';
import { AgentdashboardComponent } from '../agentdashboardsidebar/agentdashboard.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RealEStateService } from '@/app/services/real-estate.service';

@Component({
  selector: 'app-agentaddvisits',
  standalone: true,
  imports: [AgenttopbarComponent,AgentdashboardComponent,ReactiveFormsModule],
  templateUrl: './agentaddvisits.component.html',
  styleUrl: './agentaddvisits.component.scss'
})
export class AgentaddvisitsComponent {
  visitForm!:FormGroup

constructor(private service:RealEStateService,private fb:FormBuilder){}

  ngOnInit():void{
this.visitForm=this.fb.group({
leadName:['',Validators.required],
propertyType:['',Validators.required],
visitDate:['',Validators.required],
visitTime:['',Validators.required],
notes:['',Validators.required],
customerFeedback:['',Validators.required],
nextStep:['',Validators.required]
});
  }

  addVisit():void{
if(this.visitForm.valid){
  this.service.addVisit(this.visitForm.value).subscribe({
    next:(res)=>{
      alert('Visted SucsessFully.........')
      this.visitForm.reset();
    },
    error:(err)=>{
      console.error('Error :',err);
      alert("Failed to visit......");
    }
  });
}else{
  this.visitForm.markAllAsTouched();
}
  }
}
