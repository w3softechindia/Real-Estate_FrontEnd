import { CommonModule } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { agentData } from '@views/agents/data'

@Component({
  selector: 'agency-data',
  standalone: true,
  imports: [NgbPaginationModule, CommonModule],
  templateUrl: './agency-data.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AgencyDataComponent {
  agentList = agentData
}
