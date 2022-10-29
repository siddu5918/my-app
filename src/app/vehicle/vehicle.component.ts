import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleserviceService } from '../vehicleservice.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles:any=[];
  public term:string='';
  public column:string='';
  public order:string='';
  
  constructor(private _vehicleService:VehicleserviceService, private _router:Router) {
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;

      },
      (Err:any)=>{ 
        alert('Server Error')

      }
    )
  }

  filter(){
    this._vehicleService.getFilteredVehicle(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;

      },
      (Error:any)=>{
        alert('Internal Server Error')
      }
    )

  }

  pagination(page:number){
    this._vehicleService.getPagedVehicle(page).subscribe(
      (data:any)=>{
        this.vehicles=data;

      },
      (Error:any)=>{
        alert('Internal Server Error')
      }

    )

  }

  sort(){
    this._vehicleService.getSortedVehicle(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;

      },
      (Error:any)=>{
        alert('Internal Server Error')
      }


    )

  }

  delete(id:any){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert('deleted succesfully');
        location.reload();
      },
      (Error:any)=>{
        alert('Internal Server Error');
      }
    )
  }

  view(id:any){
    this._router.navigateByUrl('/dashboard/vehicle-details/'+id);
    
    
  }
  ngOnInit(): void {
  }
}
