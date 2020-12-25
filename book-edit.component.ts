import { Component, Input, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../books.service';
import { book } from '../book.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  //providers:[BooksService]
})
export class BookEditComponent implements OnInit {
@Input() bookForm:FormGroup;
id:number;
//@Input() book: book;
  constructor(private bookService:BooksService, public dialog:MatDialog) { }

  ngOnInit() {
  this.id=this.bookService.num;
 this.initForm();

  }
 onSubmit(){
   const updatedBook=new book(this.bookForm.value['name'],this.bookForm.value['description'],
   this.bookForm.value['imagePath'],this.bookForm.value['price']);
    this.bookService.updateBook(this.id,updatedBook);
    this.dialog.closeAll();
  }
 initForm(){
 let bookPrice=this.bookService.getBook(this.id).price;
 let bookName=this.bookService.getBook(this.id).name;
 let bookImg=this.bookService.getBook(this.id).imagePath;
 let bookDesc=this.bookService.getBook(this.id).description;
this.bookForm=new FormGroup({
'name':new FormControl(bookName),
'price':new FormControl(bookPrice),
'imagePath':new FormControl(bookImg),
'description':new FormControl(bookDesc),
});
}
}
