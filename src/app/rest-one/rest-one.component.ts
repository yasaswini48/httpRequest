import { Component, OnInit } from '@angular/core';
import { restOneObj } from '../models.ts/restOneObj.models';
import { RestOneService } from '../rest-one.service';

@Component({
  selector: 'app-rest-one',
  templateUrl: './rest-one.component.html',
  styleUrls: ['./rest-one.component.css']
})
export class RestOneComponent implements OnInit {

  oneArr:any;
  //inject service obj
  constructor(private serviceOne:RestOneService) { }
  //call the method that returns observable
  ngOnInit() 
  {
    this.serviceOne.getRestOneData().subscribe(
      oneData=>{
        console.log("UR data=",oneData);
        this.oneArr=oneData;
      },
      err=>{
       console.log("Displaying caught error:",err);
      }
    )
  }

}
