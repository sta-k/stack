import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartForm = this.fb.group({
    id: [''],
    product: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  cartArray: any[];
  errors:any;
  constructor(private cartService: CartService, private fb: FormBuilder) { }

  getItems() {
    this.cartService.getItems()
    .subscribe(items => {
      this.cartArray = items;
    });
  }
  ngOnInit() {
    this.getItems();
  }

  onAdd(){

    if (this.cartForm.invalid) {
      return;
    }
    this.cartService.add(this.cartForm.value).subscribe((response) => {
        this.getItems();
      }, // success
      error => {
        this.errors = error;
      }
    );
  }


  delete(id: number){
    this.cartService.remove(id).subscribe((response) => {this.getItems()});
  }

}
