import { Component, OnInit } from '@angular/core';
import { book } from './book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  selectedBook:book;
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.booksService.bookSelected.subscribe(
     ( book:book)=>{this.selectedBook=book;}
    );
  }

}
