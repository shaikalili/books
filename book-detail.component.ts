import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { bookSell } from 'src/app/shared/booksSell.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { book } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
 @Input() book :book;
id:number;
  constructor(private shoppingListService:ShoppingListService,private bkService:BooksService,
    private route:ActivatedRoute) { }

  ngOnInit() {
  }
  onAddToCart(){
    
const newBookSell=new bookSell(this.book.name,this.book.imagePath,this.book.price)
this.shoppingListService.addBookSell(newBookSell);
  }
}
