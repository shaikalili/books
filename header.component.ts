import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BooksService } from '../books/books.service';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  booksName=[];
  constructor(private auth:AuthService, private bookService:BooksService,private route:Router,
    public dialog:MatDialog){

  }
  ngOnInit(){
    
  }

  openDialog(){
    this.dialog.open(PasswordComponent);
  }
  onLogIn(){
    this.auth.logIn();
    
  }
  onLogOut(){
    this.auth.logOut();
  }

          
     
  
}
