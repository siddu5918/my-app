import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup=new FormGroup(
    {
      createdAt:new FormControl(),
      account_name:new FormControl(),
      Savings :new FormControl(),
      available_balanceew:new FormControl(),
      currency:new FormControl(),
      user_image:new FormControl(),
      account_number:new FormControl()


    }
  )
  constructor(private _bankService:BankserviceService) { }

  ngOnInit(): void {
  }

  submit(){
    this._bankService.CreatedAccounts(this.accountForm.value).subscribe(

    
    (data:any)=>{
      alert("created succesfully");
    
    },
    (err:any)=>{
      alert("internal server error");
    }
    )
  }
}
