import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth-guard.service';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BooksStartComponent } from './books/books-start/books-start.component';
import { BooksComponent } from './books/books.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
 
  {path:'',redirectTo:'/books', pathMatch:'full'},
  {path:'books', component:BooksComponent},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'admin',component:AdminComponent},
  {path:'new',canActivate:[AuthGuard],component:BooksStartComponent},
  {path:'book/:id',canActivate:[AuthGuard], component:BookEditComponent},
 


];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule { }
