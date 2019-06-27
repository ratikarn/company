import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { NewsallComponent } from './newsall/newsall.component';
import { RouterModule } from '@angular/router';

import {NewsService} from './shared/news.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    BestsellerComponent,
    NewsComponent,
    LoginComponent,
    SlideComponent,
    ProductComponent,
    ProductDetailComponent,
    AboutComponent,
    StaffComponent,
    NewsallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:NewsComponent},
      {path: 'product', component:ProductComponent},
      {path: 'product/:id', component:ProductDetailComponent},
      {path: 'newsall', component:NewsallComponent},
      {path: 'staff', component:StaffComponent},
      {path: 'about', component:AboutComponent},
      {path: '**', redirectTo: ''}
    ], {useHash: true})
  ],
  providers: [Title, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
