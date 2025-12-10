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
import { AdminGuard } from './authorization/guards/adminGuard/admin.guard'
import { AnalyticsComponent } from '@views/dashboards/analytics/analytics.component'
import { AgentComponent } from '@views/dashboards/agent/agent.component'
import { CustomerComponent } from '@views/dashboards/customer/customer.component'
import { AgencyanalyticsComponent } from './dashboards/agencyanalytics/agencyanalytics.component'
import { AgencyssidebarComponent } from './dashboards/agencyssidebar/agencyssidebar.component'
import { AgencyaddagentComponent } from './dashboards/agencyaddagent/agencyaddagent.component'
import { AgencyagentslistComponent } from './dashboards/agencyagentslist/agencyagentslist.component'
import { AgencypropertylistComponent } from './dashboards/agencypropertylist/agencypropertylist.component'
import { AgencytokenlistComponent } from './dashboards/agencytokenlist/agencytokenlist.component'
import { AgentanalyticsComponent } from './dashboards/agentanalytics/agentanalytics.component'
import { AgentpropertylistComponent } from './dashboards/agentpropertylist/agentpropertylist.component'
import { AgentaddleadsComponent } from './dashboards/agentaddleads/agentaddleads.component'
import { AgentaddvisitsComponent } from './dashboards/agentaddvisits/agentaddvisits.component'
import { AgentleadslistComponent } from './dashboards/agentleadslist/agentleadslist.component'
import { AgentvisitlistComponent } from './dashboards/agentvisitlist/agentvisitlist.component'
import { AgentaddtokenComponent } from './dashboards/agentaddtoken/agentaddtoken.component'
import { AgencypostsComponent } from './dashboards/agencyposts/agencyposts.component'
import { AgencyprofilesettingsComponent } from './dashboards/agencyprofilesettings/agencyprofilesettings.component'
import { AgencycontractagreementComponent } from './dashboards/agencycontractagreement/agencycontractagreement.component'
import { AgencypostlistComponent } from './dashboards/agencypostlist/agencypostlist.component'
import { AgentProfileSettingsComponent } from './dashboards/agent-profile-settings/agent-profile-settings.component'
import { AgentpostsComponent } from './dashboards/agentposts/agentposts.component'
import { AgenttokenlistComponent } from './dashboards/agenttokenlist/agenttokenlist.component'
import { AgencysalesComponent } from './dashboards/agencysales/agencysales.component'
import { AgentfeatureprocessComponent } from './dashboards/agentfeatureprocess/agentfeatureprocess.component'
import { AgentsalesComponent } from './dashboards/agentsales/agentsales.component'
import { AgentreviewComponent } from './dashboards/agentreview/agentreview.component'
import { AgencySoldListComponent } from './dashboards/agency-sold-list/agency-sold-list.component'
import { AgencyagnetPerormanceComponent } from './dashboards/agencyagnet-perormance/agencyagnet-perormance.component'
import { AgencyRevenueComponent } from './dashboards/agency-revenue/agency-revenue.component'
import { AgentcommisionsComponent } from './dashboards/agentcommisions/agentcommisions.component'
import { AdminpostsComponent } from '@views/adminposts/adminposts.component'
import { FeedbackComponent } from '@views/customers/feedback/feedback.component'


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'adminDashboard',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
  },
  {
    path: 'pages',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./views/extra/extra.route').then((mod) => mod.OTHER_PAGE_ROUTE),
  },
  { path: 'agencyDashboard', component: AgencyComponent },
  { path: 'agencymaindashboard', component: AgencysidebarComponent },
  { path: 'agentdashboardsidebar', component: AgentdashboardComponent },
  { path: 'shl', component: SheduleComponent },
  { path: 'agencyssidebar', component: AgencyssidebarComponent },

  { path: 'agencyanaylitcs', component: AgencyanalyticsComponent },
  { path: 'agencyaddagent', component: AgencyaddagentComponent },
  { path: 'agentslistagency', component: AgencyagentslistComponent },
  { path: 'agencypropertylist', component: AgencypropertylistComponent },
  { path: 'agencytokenlist', component: AgencytokenlistComponent },
  {path:'agencyposts', component:AgencypostsComponent},
  {path:'agencyprofile', component:AgencyprofilesettingsComponent},
  {path:'agencycontract', component:AgencycontractagreementComponent},
  {path:'agencypostlist', component:AgencypostlistComponent},
  {path:'agencysales' , component:AgencysalesComponent},
  {path:'agencysoldList' , component:AgencySoldListComponent},
  {path:'agentsperormance' , component:AgencyagnetPerormanceComponent},
  {path:'agencyrevenu', component:AgencyRevenueComponent},

//Agent Routingss.........
{path:'agentanalytics',component:AgentanalyticsComponent},
{path:'agentpropertylist',component:AgentpropertylistComponent},
{path:'agentaddleads',component:AgentaddleadsComponent},
{path:'agentaddvisit',component:AgentaddvisitsComponent},
{path:'agentleadlist',component:AgentleadslistComponent},
{path:'agentvisitlist',component:AgentvisitlistComponent},
{path:'agentaddtoken',component:AgentaddtokenComponent},
{path:'agenttokenlist',component:AgenttokenlistComponent},
{path:'agentprofile',component:AgentProfileSettingsComponent},
{path:'agentposts',component:AgentpostsComponent},
{path:'agentfeatureprocess',component:AgentfeatureprocessComponent},
{path:'agentsales',component:AgentsalesComponent},
{path:'agentreview',component:AgentreviewComponent},
{path:'agentcommission',component:AgentcommisionsComponent},
  {
    path: 'agentDashboard',
    component: AgentmaindashboardComponent,
    children: AGENT_ROUTESS,
  },
  // {path:'admin',component:AnalyticsComponent}
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

  
]
