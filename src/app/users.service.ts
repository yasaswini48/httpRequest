import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userType } from './models/userObj.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //inject httpClient obj
  constructor(private httpObj:HttpClient) 
  { }
  //when the method is called by user then only,make a get request and get data
  //The get request returns a observable , we return it back to component for subscribing
  getUsersData():Observable<userType[]>
  {
    return this.httpObj.get<userType[]>("http://localhost:3000/users"); 
  } 
  //to return single user data , make request based on id
  //make http get request to db.json , it return back observable to be subscribed
  getSingleUser(id):Observable<userType>
  {
   return  this.httpObj.get<userType>("http://localhost:3000/users/"+id);
  }
  
}
