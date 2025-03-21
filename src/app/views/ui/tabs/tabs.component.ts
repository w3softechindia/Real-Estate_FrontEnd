import { Component } from '@angular/core'
import { PageTitleComponent } from '@component/page-title.component'
import { UIExamplesListComponent } from '@component/ui-examples-list/ui-examples-list.component'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [PageTitleComponent, UIExamplesListComponent, NgbNavModule],
  templateUrl: './tabs.component.html',
  styles: ``,
})
export class TabsComponent {}
