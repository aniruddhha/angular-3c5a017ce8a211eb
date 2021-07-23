import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebMenuComponent } from './web-menu/web-menu.component';
import { WebMainComponent } from './web-main/web-main.component';
import { FeaturedBlogComponent } from './web-main/featured-blog/featured-blog.component';
import { BlogPostComponent } from './web-main/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    WebHeaderComponent,
    WebMenuComponent,
    WebMainComponent,
    FeaturedBlogComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
