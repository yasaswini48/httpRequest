import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userType } from '../models/userObj.models';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  id:any;
  singleUser:userType;
  //inject service Obj to get single user data
  //inject ActivatedRoute service for getting parameters from url
  constructor(private userServiceObj:UsersService,private arObj:ActivatedRoute) 
  { }
  //upon loading this component show user of the given id
  ngOnInit()
  {
    //get id from url
    this.id=this.arObj.snapshot.params.id;  //it returns an obj,as we need only value taking value only
    //now call the method in the service that makes the http rquest
    //it's returning an observable ,subscribe it to get data
    //this method to be called whenevr component is loaded
    //as data to be returned based on id,pass id as parameter
    this.userServiceObj.getSingleUser(this.id).subscribe(
     data=>
     {
       this.singleUser=data;
       console.log(data);
     },
     err=>
     {
       console.log("Error while reading single user's data!",err)
     }
    )
  }

}
