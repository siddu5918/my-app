import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TypicodeserviceService } from '../typicodeservice.service';

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.css']
})
export class TypicodeComponent implements OnInit {

  public typicode:any=[];

  constructor(private _typicodeseservice:TypicodeserviceService ) {

    this._typicodeseservice.gettypicode().subscribe(
      (data:any)=>{
        this.typicode=data;
      },
      (error:any)=>{
        alert("Internal servar error");
      }

    )
   }

  ngOnInit(): void {
  }

}
