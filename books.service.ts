import { Subject } from 'rxjs/Subject';
import { EventEmitter, Injectable, Input } from '@angular/core';
import { book } from './book.model';

@Injectable({providedIn:"root"})
export class BooksService{
 bookSelected= new Subject<book>();
 booksChanged=new Subject<book[]>();
 num:number;
 booksName=[];


private books:book[]=[
        new book('badolina','story about a king who lost is kingdoom','https://upload.wikimedia.org/wikipedia/he/1/10/Badolina.jpg','99.99 Nis'),
        new book('rich dad poor dad','how to become rich','https://istvantamon.com/wp-content/uploads/2019/09/Rich-Dad-Poor-Dad-1.jpg','89.99 Nis'),
        new book('becoming',
        'An intimate powerful, and inspiring memoir by the former First Lady of the United States',
        'https://images-na.ssl-images-amazon.com/images/I/414JfiBCutL._SX327_BO1,204,203,200_.jpg','50.99 Nis'),
        new book('a Promised Land',' riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy',
        'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg','78 Nis'),
        new book('greenlights',
        'unconventional memoir filled with raucous stories, outlaw wisdom, and lessons learned the hard way about living with greater satisfaction',
        'https://images-na.ssl-images-amazon.com/images/I/41U3yoF6sXL._SX427_BO1,204,203,200_.jpg','150 Nis'),
        new book('love Languages Of Children','The Secret To Loving Children Effectively',
        'https://images-na.ssl-images-amazon.com/images/I/516lgavDTpL._SX315_BO1,204,203,200_.jpg','39.99 Nis'),
        new book('the Spell Book for New Witches','This spell book starts with an introduction to spell work, including performing spells, prepping your space, and channeling energy to access your power',
        'https://images-na.ssl-images-amazon.com/images/I/51xi+8pCRvL._SX350_BO1,204,203,200_.jpg','67 Nis'),
        new book('the Four Agreements','In The Four Agreements, bestselling author don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, The Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love.',
        'https://images-na.ssl-images-amazon.com/images/I/51FcSSKpJBL._SX343_BO1,204,203,200_.jpg','78 Nis')
      ];

      constructor(){
        console.log("new book service");
      }
      getBooks(){
          return this.books.slice();    
      }
      getBook(index:number){
        return this.books[index];
      }
      getIndex(i:number){
      this.num=i;
      }

      addBook(book:book){
        this.books.push(book);
      }
      updateBook(index:number,newBook:book){
        this.books[index]=newBook;
      }
}