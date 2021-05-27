import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productObj } from './models/productObj.model';

@Injectable({
  providedIn: 'root'
})
export class TelivisionsService {

  //inject http client obj
  constructor(private httpObj:HttpClient) 
  { }
  //when this method called make http get request
  getTvsData():Observable<productObj[]>
  {
   return this.httpObj.get<productObj[]>("http://localhost:3000/tvs");
  }
}
