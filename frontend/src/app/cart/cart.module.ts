import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart.component';
import { OrderComponent } from './components/order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
  ],
  declarations: [
    CartComponent,
    OrderComponent,
    ]
})
export class CartModule { }
