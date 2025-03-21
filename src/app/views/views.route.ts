import type { Route } from '@angular/router'
import { InboxComponent } from './apps/inbox/inbox.component'
import { MessagesComponent } from './apps/messages/messages.component'
import { OrdersComponent } from './apps/orders/orders.component'
import { ReviewsComponent } from './apps/reviews/reviews.component'
import { TransactionsComponent } from './apps/transactions/transactions.component'
import { WidgetsComponent } from './apps/widgets/widgets.component'

export const VIEWS_ROUTES: Route[] = [
  {
    path: 'dashboards',
    loadChildren: () =>
      import('./dashboards/dashboard.route').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
  {
    path: 'property',
    loadChildren: () =>
      import('./property/property.route').then((mod) => mod.PROPERTY_ROUTES),
  },
  {
    path: 'agents',
    loadChildren: () =>
      import('./agents/agents.route').then((mod) => mod.AGENT_ROUTES),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.route').then((mod) => mod.CUSTOMER_ROUTES),
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { title: 'Orders' },
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    data: { title: 'Transactions' },
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
    data: { title: 'Reviews' },
  },
  {
    path: 'messages',
    component: MessagesComponent,
    data: { title: 'Messages' },
  },
  {
    path: 'inbox',
    component: InboxComponent,
    data: { title: 'Inbox' },
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./post/post.route').then((mod) => mod.POST_ROUTES),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  },
  {
    path: 'widgets',
    component: WidgetsComponent,
    data: { title: 'Widgets' },
  },
  {
    path: 'ui',
    loadChildren: () => import('./ui/ui.route').then((mod) => mod.UI_ROUTES),
  },
  {
    path: 'extended',
    loadChildren: () =>
      import('./extended/extended.route').then((mod) => mod.EXTENDED_ROUTES),
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.route').then((mod) => mod.CHART_ROUTES),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.route').then((mod) => mod.FORMS_ROUTES),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/table.route').then((mod) => mod.TABLE_ROUTES),
  },
  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.route').then((mod) => mod.ICONS_ROUTES),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./maps/maps.route').then((mod) => mod.MAPS_ROUTES),
  },
]
