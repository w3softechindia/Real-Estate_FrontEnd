import { Route } from "@angular/router";
import { AddComponent } from "./add/add.component";

export const AGENCY_ROUTES: Route[] = [
 
  { path: 'add-agency', component: AddComponent, data: { title: 'Add Agency' } },
]