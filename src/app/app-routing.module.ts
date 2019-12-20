import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import {UsersComponent } from './users/users.component';
import {DetailsComponent} from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { GraphComponent } from './graph/graph.component';
import { FusiongraphComponent } from './fusiongraph/fusiongraph.component';
import { WifiComponent } from './wifi/wifi.component';

const routes: Routes = [
  {
    path: 'Users',
    component: UsersComponent,
  },
 {
   path: 'users',
   component: UsersComponent,
 },
 {
  path: 'wifi',
  component: WifiComponent,
},
 {
   path: 'details/:id',
   component: DetailsComponent,
 },
 {
  path: 'graph',
  component: GraphComponent,
},
{
  path:'',
  component:FusiongraphComponent,
},
 {
   path: 'posts',
   component: PostsComponent,
 },
 {
   path: 'dashboard',
   component: DashboardComponent,
 },
 {
   path: 'footer',
   component:FooterComponent,
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
