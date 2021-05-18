import { Component, OnInit } from '@angular/core';
import { restTwoObj } from '../models.ts/restTwoObj.models';
import { RestTwoService } from '../rest-two.service';

@Component({
  selector: 'app-rest-two',
  templateUrl: './rest-two.component.html',
  styleUrls: ['./rest-two.component.css']
})
export class RestTwoComponent implements OnInit 
{

  twoArr:restTwoObj[]=[];
  //inject service obj
  constructor(private serviceTwo:RestTwoService) 
  { }
  //call the method and as it's returns the obersrvable subscribe it to get data
  ngOnInit() 
  {
   //call method using service obj,subscribe observable returned,get data 
   this.serviceTwo.getRestTwoData().subscribe
      (
       //assign the data returned
       twoData=>
       {
         console.log(twoData);
        this.twoArr=twoData;
       },
       //display errors 
       err=>
       {
         console.log("Error caught in restTwo!",err)
       }
      )
  }


}
