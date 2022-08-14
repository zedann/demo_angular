import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './posts/details/details.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { GuardService } from './guard.service';
import { PostService } from './post.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import {HttpClientModule} from "@angular/common/http";
import { AddComponent } from './posts/add/add.component';
import { AboutComponent } from './about/about.component'
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailsComponent,
    HomeComponent,
    AdminComponent,
    PlaceholderComponent,
    AddComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GuardService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
