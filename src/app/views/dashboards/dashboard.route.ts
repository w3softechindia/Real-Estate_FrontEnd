import type { Route } from '@angular/router'
import { AnalyticsComponent } from './analytics/analytics.component'
import { AgentComponent } from './agent/agent.component'
import { CustomerComponent } from './customer/customer.component'
import { AgencytopbarComponent } from '@/app/dashboards/agencytopbar/agencytopbar.component'

export const DASHBOARD_ROUTES: Route[] = [
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

  //like this
  {
    path:'agencytopbar',
    component:AgencytopbarComponent,
    data:{title: 'Dashboard'}
  }
]


// -------------------------------------------------------------------------