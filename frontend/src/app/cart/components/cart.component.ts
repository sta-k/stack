import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: '../pages/cart.component.html'
})
export class CartComponent implements OnInit {
  cartForm = this.fb.group({
    id: [''],
    product: ['', Validators.required],
    quantity: ['', Validators.required],
  });

  cartArray: any[];
  errors:any;
  loading={add:false,delete:false, order:false};
  submitted = false;
  constructor(private cartService: CartService, 
    private router: Router, private fb: FormBuilder) { }

  get f() {
    return this.cartForm.controls;
  }  

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
    this.submitted = true;
    if (this.cartForm.invalid) {
      return;
    }
    this.loading.add = true;
    this.cartService.add(this.cartForm.value).subscribe((response) => {
        this.getItems();
        this.loading.add = false;
        this.submitted = false;
        this.cartForm.patchValue({
          product:'',
          quantity:''
        })
      }, // success
      error => {
        this.errors = error;
      }
    );
  }
  createOrder(){
    if(this.cartArray.length!=0) {
      this.loading.order = true;
      this.cartService.order().subscribe((response) => {
        // this.loading.order = false;
        this.router.navigate(['/order/']);
      }, // success
      error => {
        this.errors = error;
      });
    }
  }


  delete(id: number){
    this.loading.delete = true;
    this.cartService.remove(id).subscribe((response) => {this.loading.delete = false;this.getItems()});
  }

}
