import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookEditComponent } from '../books/book-edit/book-edit.component';
import { book } from '../books/book.model';
import { BooksStartComponent } from '../books/books-start/books-start.component';
import { BooksService } from '../books/books.service';

export interface DialogData {
  index:number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
books:book[];
closeResult = '';
book=false;
@ViewChild('exampleModal')exemple:ElementRef;
  constructor(private bookService:BooksService, public dialog:MatDialog ) { }

  ngOnInit() {
    this.books=this.bookService.getBooks();
  }

  openDialog(){
    this.dialog.open(BooksStartComponent);
  }
  openEditDialog(i:number){
    this.bookService.getIndex(i);
    this.dialog.open(BookEditComponent);

  }
  
}
