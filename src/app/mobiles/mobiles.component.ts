import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { productObj } from '../models/productObj.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit 
{
  mobilesArr:productObj[]=[];
  //searched item
  searchedItem:any;
  //inject mobiles service obj
  constructor(private mbServiceObj:MobilesService) 
  {

  }
  //when component loaded, call the method in service
  //it returns an observable,subscribe it to get mobiles Array
  ngOnInit() 
  {
    this.mbServiceObj.getMobilesData().subscribe
    (
      //mobiles array assigned
      mbData=>
      {
        this.mobilesArr=mbData;
        console.log("Array of mobiles=",this.mobilesArr);
      },
      err=>
      {
        console.log("Error while reading mobiles data",err);
      }
    )
  }
  
  


}
