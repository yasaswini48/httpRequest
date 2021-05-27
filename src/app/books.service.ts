import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productObj } from './models/productObj.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //Inject http Client service object
  constructor(private httpObj:HttpClient) 
  { }
  //when this method is called by component then make http get request
  //it returns an observable, return it back to the component
  //component subscribes it
  getBooksData():Observable<productObj[]>
  {
   return this.httpObj.get<productObj[]>("http://localhost:3000/books");
  }
}
