import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any=[];
  public term:string="";
  public column:string="";
  public oreder:string="";

  constructor(private _bankservice:BankserviceService,private router:Router) {
   this._bankservice.getAccounts().subscribe(
    (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
    },
    (error:any)=>{
      alert( "Internal server error");
    }
    
    )
  }

  ngOnInit(): void {
  }
  filter(){
    this._bankservice.getfilterAccounts(this.term) .subscribe(

    
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert("internal server error");

    }
    )
  
  }
  pagination(page:number){
    this._bankservice.getpageAccounts(page).subscribe(
    (data:any)=>{
      this.accounts= data;
    },
    (err:any)=>{
      alert("internal server error");

  }
    )

  }
  sort(){
    this._bankservice.getSortedAccounts(this.column,this.oreder).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
    delete(id:string){
      this._bankservice.DeleteAccounts(id).subscribe(
        (data:any)=>{
          alert("deleted succefully!!!");
          location.reload()
        },
        (err:any)=>{
          alert("internal sever error");
        }
      )
    }
    view(id:string)
    {
    this.router.navigateByUrl('/dashboard/bank-details/'+id);
    }
}
