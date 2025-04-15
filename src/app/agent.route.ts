import { Route } from "@angular/router";
import { AgentComponent } from "@views/dashboards/agent/agent.component";
import { AnalyticsComponent } from "@views/dashboards/analytics/analytics.component";
import { CustomerComponent } from "@views/dashboards/customer/customer.component";
import { AgencytopbarComponent } from "./dashboards/agencytopbar/agencytopbar.component";
import { SheduleComponent } from "./shedule/shedule.component";

export const AGENT_ROUTESS: Route[] = [
 
  {
    path: 'shl',
    component: SheduleComponent,
    data: { title: 'Schedule' }
  }
];

