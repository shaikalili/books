
import { Injectable, Input } from '@angular/core';
import { bookSell } from '../shared/booksSell.model';
@Injectable({providedIn:"root"})
export class ShoppingListService{
  index:number;
  private  selectedBooks:bookSell[]=[];


    getbookSellToBuy(){
        return this.selectedBooks;
    }
    addBookSell(bookSell:bookSell){
        this.selectedBooks.push(bookSell);
    }

}