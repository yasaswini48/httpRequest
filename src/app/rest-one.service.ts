import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestOneService {
  
  //inject the httpClient obj
  constructor(private rs1Obj:HttpClient) 
  { }
  //when method called -> make http get request and return observable
  getRestOneData():Observable<any>
  {
    return this.rs1Obj.get<any>("https://reqres.in/api/unknown");
  }

}
