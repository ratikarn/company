import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartModule as HC} from 'angular2-highcharts';

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
import { NewsService } from './shared/news.service';
import { ProductService } from './shared/product.service';
import { ProductRateComponent } from './product/product-rate.component';
import { MypipePipe } from './shared/mypipe.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { RegisterComponent } from './register/register.component';
import { MemberComponent } from './member/member.component';
import { Register2Component } from './register2/register2.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';
import { SecureComponent } from './secure/secure.component';

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
    NewsallComponent,
    ProductRateComponent,
    MypipePipe,
    ProductFilterPipe,
    RegisterComponent,
    MemberComponent,
    Register2Component,
    AuthRegisterComponent,
    Report1Component,
    Report2Component,
    Report3Component,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HC.forRoot(require('highcharts')),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component:NewsComponent},
      {path: 'product', component:ProductComponent},
      {path: 'product/:id/product_name/:product_name', component:ProductDetailComponent},
      {path: 'newsall', component:NewsallComponent},
      {path: 'staff', component:StaffComponent},
      {path: 'about', component:AboutComponent},
      {path: 'secure', component:SecureComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'register2', component:MemberComponent},
      {path: 'reactiveform', component:Register2Component},
      {path: 'signup', component:AuthRegisterComponent},
      {path: 'report1', component:Report1Component},
      {path: 'report2', component:Report2Component},
      {path: 'report3', component:Report3Component},
      {path: '**', redirectTo: ''}
    ], {useHash: true})
  ],
  providers: [Title, NewsService, ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
