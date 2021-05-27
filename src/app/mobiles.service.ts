import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productObj } from './models/productObj.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {
  
   //inject httpClient obj here
   constructor(private httpMbObj:HttpClient) 
   { }
   //when the method is called by mobiles component make http get request
   //it returns an observable of productObj array type 
   //return this observable back to mobiles component
   getMobilesData():Observable<productObj[]>
   {
    return this.httpMbObj.get<productObj[]>("http://localhost:3000/mobiles");
   }

}
