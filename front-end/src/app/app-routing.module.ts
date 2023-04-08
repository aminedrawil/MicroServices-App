import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import {BillsComponent} from "./components/bills/bills.component";
import {CustomersComponent} from "./components/customers/customers.component";

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"bills",component:BillsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
