import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{book} from'../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
 books:book[];
 @ViewChild('nameInput') nameInputRef:ElementRef;
 booksToShow:book[]=[];
booksName:string[]=[];
bookName='';
bkname='';
searchName='';
index:number;
  constructor(private booksService:BooksService
    ,private router:Router
    ,private route:ActivatedRoute) {}

  ngOnInit() { 

    this.books=this.booksService.getBooks();
    for(let book of this.books)
    this.booksName.push(book.name);
  }
 
  getChosenBookIndex(){
    return this.booksService.num;
  }
  save(event){
    for(let i=0;i<this.books.length;i++){
      if(event.target.value==this.booksName[i]){
       this.router.navigate(['books/'+i]);
      }     
    }
    console.log('next');
   }
  
   press(event){

     this.bkname+=event.key;
     this.bkname.toLowerCase();
     for(let i=0;i<this.booksName.length;i++){
          if(this.booksName[i].toLowerCase().includes(this.bkname)){
            this.booksToShow.push(this.booksService.getBooks()[i]);
          }    
        }
        this.books=this.booksToShow;
        this.booksToShow=[];
        if(this.nameInputRef.nativeElement.value===''){
          this.bkname='';
          this.books=this.booksService.getBooks();
        }
       } 

}
