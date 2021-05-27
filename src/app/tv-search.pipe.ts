import { Pipe, PipeTransform } from '@angular/core';
import { productObj } from './models/productObj.model';

@Pipe({
  name: 'tvSearch'
})
export class TvSearchPipe implements PipeTransform {

  //gets searchedtv and tvsArrays
  transform(tvsArr:productObj[],searchedTv:any) 
  {
    //nothing searched or array is empty
    if( !tvsArr || !searchedTv)
    {
      //alert("Not Found Searched");
      return tvsArr;
    }
    else
    {
     return tvsArr.filter(tvObj=>tvObj.productTitle.toLowerCase().indexOf(searchedTv.toLowerCase())!==-1)
    }
  }

}
