import type { Route } from '@angular/router'
import { PostListComponent } from './post-list/post-list.component'
import { DetailsComponent } from './details/details.component'
import { CreateComponent } from './create/create.component'
import { AdmingetpostsComponent } from '@views/admingetposts/admingetposts.component'
import { AdminpostsComponent } from '@views/adminposts/adminposts.component'

export const POST_ROUTES: Route[] = [
  { path: '', component: PostListComponent, data: { title: 'Blog Grid' } },
  {
    path: 'details',
    component: DetailsComponent,
    data: { title: 'Blog Details' },
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { title: 'Blog Create' },
  },


  {
    path: 'admingetpost',
    component: AdmingetpostsComponent,
    data: { title: 'Blog Create' },
  },


   {
    path: 'adminposts',
    component: AdminpostsComponent,
    data: { title: 'Blog Create' },
  },

]








// export const POST_ROUTES: Route[] = [
//   {
//     path: '',
//     children: [
//       { path: 'list', component: PostListComponent, data: { title: 'Blog List' } },
//       { path: 'details', component: DetailsComponent, data: { title: 'Blog Details' } },
//       { path: 'create', component: CreateComponent, data: { title: 'Blog Create' } },
//       { path: '', redirectTo: 'list', pathMatch: 'full' } // default /post → list
//     ]
//   }
// ];

