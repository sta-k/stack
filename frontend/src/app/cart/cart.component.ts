import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  todoArray: any[];
  constructor(private toDoSer: CartService) { }

  ngOnInit() {
    this.toDoSer.getItems()
    .subscribe(item => {
      this.todoArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.todoArray.push(x);
      })

      this.todoArray.sort((a,b) => {
        return a.isChecked - b.isChecked;
      })
    });
  }

  onAdd(itemTitle){
    
    this.toDoSer.add(itemTitle.value).subscribe();
    itemTitle.value = null;
  }


  delete($key: number){
    this.toDoSer.remove($key).subscribe();
  }

}
