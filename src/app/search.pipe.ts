import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { productObj } from './models/productObj.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform 
{
  obj:productObj;
  fl:number=0;
  //recieves the brandname searched and mobilesdata
  transform(mobilesArr:productObj[],searchedItem:any) 
  {
    //if the array is empty or nothing seacrhed
    if(!mobilesArr || !searchedItem)
    {
      return mobilesArr;
    }
    else
    {
    return  mobilesArr.filter(mobileObj=>mobileObj.productTitle.toLowerCase().indexOf(searchedItem.toLowerCase())!==-1)
    }



    //convert the 
    /*for(this.obj of mobilesArr)
    {
      if(this.obj.productTitle.toLowerCase()==searchedItem.toLowerCase())
      {
        console.log("Founddddd");
       return true;
      }
      else
      return false;
    }
   }*/


    

  }

}
