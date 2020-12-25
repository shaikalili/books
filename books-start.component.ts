import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormControl, FormGroup } from '@angular/forms';
import { book } from '../book.model';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-books-start',
  templateUrl: './books-start.component.html',
  styleUrls: ['./books-start.component.css'],
})
export class BooksStartComponent implements OnInit {
  @Input() bookForm:FormGroup;

  constructor(private bookService:BooksService,public dialog:MatDialog) { }

  ngOnInit(): void {
  this.initForm();
  }
  onSubmit(){
  const addedBook=new book(this.bookForm.value['name'],this.bookForm.value['description'],
   this.bookForm.value['imagePath'],this.bookForm.value['price']+' Nis');
    this.bookService.addBook(addedBook);
    this.dialog.closeAll();
}
 initForm(){
 let bookPrice="";
 let bookName="";
 let bookImg="";
 let bookDesc="";
this.bookForm=new FormGroup({
'name':new FormControl(bookName),
'price':new FormControl(bookPrice),
'imagePath':new FormControl(bookImg),
'description':new FormControl(bookDesc),
});
}
}
