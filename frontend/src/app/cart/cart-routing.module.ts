import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CartComponent } from './components/cart.component';
import { OrderComponent } from './components/order.component';
const routes: Routes = [
  {path: '', redirectTo: 'cart', pathMatch: 'prefix'},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class CartRoutingModule {
}
