import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BooksStartComponent } from './books/books-start/books-start.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { DropDown } from './shared/dropDown.directive';
import { AdminComponent } from './admin/admin.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BooksListComponent,
    BookDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BookItemComponent,
    BookEditComponent,
    BooksStartComponent,
    DropDown,
    AdminComponent,
    PasswordComponent
  ],
  entryComponents:[BooksStartComponent,
    BookEditComponent,PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule
    
    
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
