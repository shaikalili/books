import { Component,Input, OnInit, Output } from '@angular/core';
import { book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() book: book;
@Input() index:number;
//@Output() bookSelected= new EventEmitter<void>();
  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
  }
onSelected(){
this.booksService.bookSelected.next(this.book)
this.booksService.getIndex(this.index);
}
}
