import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup=new FormGroup(
    {
      name: new FormControl(),
      phone:new FormControl(),
      dob:new FormControl(),
      address:new FormControl( 

      {
        city:new FormControl(),
        pin:new FormControl()
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
          cvv:new FormControl()
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
  console.log(this.userForm)
}
}
