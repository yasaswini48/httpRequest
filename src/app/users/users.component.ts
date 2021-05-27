import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userType } from '../models/userObj.models';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit 
{
  userArr:userType[]=[];
  //inject users service obj 
  //inject Router service for navigation
  constructor(private userServiceObj:UsersService,private routerObj:Router) 
  { }
  //when the component is loaded, then call the method in service that returns the Observable.
  //Subscribe observable and assign data
  ngOnInit()
  {
      this.userServiceObj.getUsersData().subscribe
      (
        data=>
        {
         this.userArr=data;
         console.log(this.userArr);
        },
        err=>
        {
          console.log("Error found while getting users data",err);
        }
      )
  }
  //to navigate to usersdetails component when button clicked
  idNavigate(id)
  {
     //navigate by taking url to the respective component
    this.routerObj.navigateByUrl("users/"+id);
  }

}
