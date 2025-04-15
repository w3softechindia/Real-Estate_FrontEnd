import { inject } from '@angular/core'
import { Router, Routes } from '@angular/router'
import { AuthenticationService } from '@core/services/auth.service'
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component'
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component'
import { ComingSoonComponent } from '@views/extra/coming-soon/coming-soon.component'
import { Error404Component } from '@views/extra/error404/error404.component'
import { MaintenanceComponent } from '@views/extra/maintenance/maintenance.component'
import { AgencyComponent } from './dashboards/agency/agency.component'
import { AgencysidebarComponent } from './dashboards/agencysidebar/agencysidebar.component'
import { AgentdashboardComponent } from './dashboards/agentdashboardsidebar/agentdashboard.component'
import { AgentmaindashboardComponent } from './dashboards/agentmaindashboard/agentmaindashboard.component'
import { AGENCY_ROUTES } from './agency.route'
import { SchedulesComponent } from '@views/apps/widgets/components/schedules/schedules.component'
import { SheduleComponent } from './shedule/shedule.component'
import { AGENT_ROUTESS } from './agent.route'


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboards/analytics',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
    canActivate: [
      (url: any) => {
        const router = inject(Router)
        const authService = inject(AuthenticationService)
        if (!authService.session) {
          return router.createUrlTree(['/auth/sign-in'], {
            queryParams: { returnUrl: url._routerState.url },
          })
        }
        return true
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'pages',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/extra/extra.route').then((mod) => mod.OTHER_PAGE_ROUTE),
  },
  { path: 'agency', component: AgencyComponent },
  { path: 'agencysidebar', component: AgencysidebarComponent },
  { path: 'agentdashboardsidebar', component: AgentdashboardComponent },
  {path:'agentdashboard', component:AgentmaindashboardComponent},

  {path : 'shl', component:SheduleComponent},
 

  // {
  //   path: 'aggeent',
  //   component: AgentmaindashboardComponent,
  //   loadChildren: () =>
  //     import('./agent.route').then((mod) => mod.AGENT_ROUTESS),
  // },

 
  {
    path: 'agent', // If you're using "aggeent", keep it. But "agent" is better.
    component: AgentmaindashboardComponent,
    children: AGENT_ROUTESS
  }

]
