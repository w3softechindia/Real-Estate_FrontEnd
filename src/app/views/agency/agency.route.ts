import { Route } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";
import { Title } from "@angular/platform-browser";
import { AssignVentureComponent } from "./assign-venture/assign-venture.component";

export const AGENCY_ROUTES: Route[] = [

  { path: 'add-agency', component: AddComponent, data: { title: 'Add Agency' } },
  { path: 'agency-list', component: ListComponent, data: { title: 'Agencies List' } },
  { path: 'assign-venture', component: AssignVentureComponent, data: { title: 'Assign Ventures' } }
]