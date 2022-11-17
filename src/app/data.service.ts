import {EventEmitter, Injectable} from '@angular/core';
import {Book} from "./model/Book";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Array<Book>
  bookAddedEvent = new EventEmitter<Book>()

  constructor() {
    this.books = new Array<Book>();
    const book1 = new Book('123', '123', 123);
    this.books.push(book1);
  }

  addNewBook(book: Book) {
    if (book.author==='James'){
      this.bookAddedEvent.error('Books by James are not allowed')
    }
    this.books.push(book);
    this.bookAddedEvent.emit(book)
  }

  removeLastBook() {
    if (this.books.length !== 0) {
      this.books.pop();
    }
  }

  getBooksAmount(): number {
    return this.books.length;
  }


}
