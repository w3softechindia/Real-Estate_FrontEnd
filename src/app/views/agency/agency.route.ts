import { Route } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";
import { Title } from "@angular/platform-browser";

export const AGENCY_ROUTES: Route[] = [
 
  { path: 'add-agency', component: AddComponent, data: { title: 'Add Agency' } },
  { path: 'agency-list', component:ListComponent, data: {title:'Agencies List'} },
]