import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './routing/routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {GroupsComponent} from './groups/groups.component';
import {EmployeesComponent} from './employees/employees.component';
import {ProductComponent} from './product/product.component';
import {Auth2Service} from './service/auth2.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  imports:      [ 
        AppRoutingModule, 
        BrowserModule,
        FormsModule,
        MatSidenavModule,
        NgxPaginationModule,
        HttpClientModule
         ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    NavComponent,
    SidebarComponent,
    HomeComponent,
    GroupsComponent,
    EmployeesComponent,
    ProductComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailComponent
     ],
  bootstrap:    [ AppComponent ],
  providers: [Auth2Service]
})
export class AppModule { }
