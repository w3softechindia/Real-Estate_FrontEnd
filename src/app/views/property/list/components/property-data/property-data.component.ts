import { Venture } from '@/app/modals/user.model'
import { RealEStateService } from '@/app/services/real-estate.service'
import { CommonModule, DecimalPipe } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core'
import { currency } from '@common/constants'
import {
  NgbDropdownModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'
import { propertyData } from '@views/property/data'

@Component({
  selector: 'property-data',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, NgbDropdownModule],
  templateUrl: './property-data.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PropertyDataComponent{
  // propertyList = propertyData
  // currency = currency
  ventures:Venture[]=[];

  constructor(private service:RealEStateService){}

  ngOnInit(){
    this.getAllVentures();
  }

  private getAllVentures(){
    this.service.getAllVentures().subscribe((data:any[])=>{
      this.ventures=data;
    })
  }
}
