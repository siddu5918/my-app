import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
submit() {
throw new Error('Method not implemented.');
}
  public productForm: FormGroup = new FormGroup(

    {
      name: new FormControl(),
      price: new FormControl(),
      expiry: new FormControl(),
    
      deliveryaddress: new FormGroup(
        {
          hno: new FormControl(),
          city: new FormControl(),
          pin: new FormControl()
        }
        
      ),
       comments:new FormArray([]),
        payment: new FormControl(),
        upiid: new FormControl(),
        cardnumber: new FormControl()
    }
  )
  get commentsFormArray(){
      return this.productForm.get('comments') as FormArray; 
  }



  constructor() { }

  ngOnInit(): void {
  }
  addComments(){
    this.commentsFormArray.push(new FormGroup(
      {
        message:new FormControl(),
        time: new FormControl()

      }
    )
    )
  }
delete(i:number){this.commentsFormArray.removeAt(i);

}
}
