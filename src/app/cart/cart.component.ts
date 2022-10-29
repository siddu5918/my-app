import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public name:string="";
public price:number=0;
public quantity:number=0;
public products:any=[
  { name:'siddu',price:2000,quantity:50},
  {name:'siddarth',price:50,quantity:60}
]
  constructor() { }

  ngOnInit(): void {
  }
    cart(){
    let product={
      name:this.name,
      price:this.price,
      quantity:this.quantity
    
    }
    this.products.push(product);
    this.name="";
    this.price=0;
    this.quantity=0;
    
    alert("add to cart suceesfully!!!");
  }
  delete(i:number){
    this.products.splice(i,1);
  }
}
