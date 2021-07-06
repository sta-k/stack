import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CartComponent } from './cart.component';
const routes: Routes = [
  {path: '', redirectTo: 'cart', pathMatch: 'prefix'},

  {path: 'cart', component: CartComponent},
  
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
