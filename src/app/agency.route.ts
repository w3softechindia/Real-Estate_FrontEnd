import { Route } from "@angular/router";
import { AgentComponent } from "@views/dashboards/agent/agent.component";
import { AnalyticsComponent } from "@views/dashboards/analytics/analytics.component";
import { CustomerComponent } from "@views/dashboards/customer/customer.component";
import { AgencytopbarComponent } from "./dashboards/agencytopbar/agencytopbar.component";

export const AGENCY_ROUTES: Route[] = [
  {
    path: 'analytics',
    component: AnalyticsComponent,
    data: { title: 'Analytics' },
  },
  {
    path: 'agent',
    component: AgentComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: { title: 'Dashboard' },
  },
  {
    path:'agencytopbar',
    component:AgencytopbarComponent,
    data:{title: 'Dashboard'}
  }
]
