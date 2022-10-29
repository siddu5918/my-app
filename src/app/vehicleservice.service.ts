import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {

  constructor(private _httpClient:HttpClient) { 

  }
  getVehicles(): Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1');
  }

  getVehicle(id:any): Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

  getFilteredVehicle( term:string): Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term);
  }

  getPagedVehicle( page:number): Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page='+page);
  }

  getSortedVehicle( column:string, order:string): Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortby='+column+'&order='+order);
  }

  CreateVehicle(data:any): Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data);
  }

  updateVehicle(id:string, data:any): Observable<any>{
    return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id,data);
  }

  deleteVehicle(id:string): Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }
}

  

