import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup=new FormGroup(
    {
      name: new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
      phone:new FormControl(null,[Validators.required,Validators.min(10000000000),Validators.max(10000000000)]),
      dob:new FormControl(),
      address:new FormControl( 
      
      {
        city:new FormControl(),
        pin:new FormControl(),
      }
    ),
    cards:new FormArray([]),
    type:new FormControl(),
    busfee:new FormControl(),
    hostelfee:new FormControl()
    }
  
  ) 
  get cardsFormArray(){
    return this.userForm.get('cards')as FormArray;
  }
  add(){
    this.cardsFormArray.push(
      new FormGroup(
        {
          name:new FormControl(),
          expeiry: new FormControl(),
          cvv:new FormControl(null,[Validators.required, Validators.min(100),Validators.max(999)])
        }
      )
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }
  constructor() { }

  ngOnInit(): void {
  }
submit(){
  console.log(this.userForm);
  this.userForm.markAllAsTouched();
}
}
