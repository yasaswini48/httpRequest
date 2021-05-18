import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { restTwoObj } from './models.ts/restTwoObj.models';

@Injectable({
  providedIn: 'root'
})
export class RestTwoService {

  //injecting httpCLient obj 
  constructor(private rs2Obj:HttpClient) 
  { }
  //make a http get request -> got an observable,return it back to component 
  getRestTwoData():Observable<restTwoObj[]>
  {
   return this.rs2Obj.get<restTwoObj[]>("https://jsonplaceholder.typicode.com/users");
  }
}
