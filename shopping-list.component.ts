import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { book } from '../books/book.model';
import { BooksService } from '../books/books.service';
import { bookSell } from '../shared/booksSell.model';
import { ShoppingListService } from './shopping-list.service';
//import{book} from'../books/book.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
selectedBooks:bookSell[];
index:number;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.selectedBooks=this.slService.getbookSellToBuy();
    
  }
  onClear(){
   this.selectedBooks=[];
  }
  onDelete(event:Event){
   this.index=+(<HTMLInputElement>event.target).id;
   this.selectedBooks.splice(this.index,1);
  }
  onAddItem(event:Event){
    this.index=+(<HTMLInputElement>event.target).id;
    const newBookSell=new bookSell(this.selectedBooks[this.index].name,
      this.selectedBooks[this.index].imagePath,this.selectedBooks[this.index].price)
    this.slService.addBookSell(newBookSell);
      }
}
