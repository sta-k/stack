import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: '../pages/order.component.html'
})
export class OrderComponent implements OnInit {
  orderData: any;
  constructor(private cartService: CartService) { }

  getItems() {
    this.cartService.getOrders()
    .subscribe(items => {
      this.orderData = items;
    });
  }
  ngOnInit() {
    this.getItems();
  }


}
