import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {HomeComponent} from '../home/home.component';
import {GroupsComponent} from '../groups/groups.component';
import {EmployeesComponent} from '../employees/employees.component';
import {ProductComponent} from '../product/product.component';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
// import { HomeViewComponent } from './views/home/home.component';
// import { CatalogViewComponent } from './views/catalog/catalog.component';

@NgModule({
  declarations: [ 
    // LoginViewComponent, HomeViewComponent, CatalogViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: HomeComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product_details', component: ProductDetailComponent },
      { path: 'employees', component: EmployeesComponent },
      // { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}