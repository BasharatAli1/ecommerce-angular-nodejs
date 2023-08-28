import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './deals/deals.component';

const routes: Routes = [
  { component: HomeComponent, path: "" },
  { component: ProductsComponent, path: "products" },
  { component: DealsComponent, path: "deals" },
  // { component: ErrorComponent, path: "**" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
