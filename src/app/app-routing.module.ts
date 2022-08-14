import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { GuardService } from './guard.service';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { AddComponent } from './posts/add/add.component';
import { DetailsComponent } from './posts/details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path:"posts",
    children:[
      {
      path:"",
      component:PostsComponent,
      },
      {
        path:"details/:id",
        component:DetailsComponent,
      },

  ]

  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admin",
    component:AdminComponent,canActivate:[GuardService]
  },
  {
    path:"place",
    component:PlaceholderComponent
  },
  {
    path:"about",
    component:AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
