import { Component, OnInit } from '@angular/core';
import { productObj } from '../models/productObj.model';
import { TelivisionsService } from '../telivisions.service';

@Component({
  selector: 'app-telivisions',
  templateUrl: './telivisions.component.html',
  styleUrls: ['./telivisions.component.css']
})
export class TelivisionsComponent implements OnInit {
  //searched tv
  searchedTv:any;
  //tvs data
  tvsArr:productObj[]=[];
  //inject service obj
  constructor(private tvServiceObj:TelivisionsService) 
  { }
  //call the method to get data
  ngOnInit() 
  {
    this.tvServiceObj.getTvsData().subscribe(
      tvData=>
      {
        this.tvsArr=tvData;
      },
     err=>
     {
       console.log("Error while reading tv's data",err);
     }
      
    )
  }

}
