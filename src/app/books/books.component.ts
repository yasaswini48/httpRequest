import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { productObj } from '../models/productObj.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 
  //searchedbook
  booksearched:any;
  //books data
  booksArr:productObj[]=[];
  //inject service object
  constructor(private bookServiceObj:BooksService) 
  { }
  //call the method to get books array when ever the component is loaded
  //using async pipe
  ngOnInit() 
  {
   return this.bookServiceObj.getBooksData().subscribe(
     bookdata=>
     {
       this.booksArr=bookdata;
     },
     err=>
     {
       console.log("Error while reading books data!");
     }
   ) 
  }

}
