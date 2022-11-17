import {EventEmitter, Injectable} from '@angular/core';
import {Book} from "./model/Book";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Array<Book>
  bookAddedEvent = new EventEmitter<Book>()
  bookDeletedEvent = new EventEmitter<string>();

  constructor() {
    this.books = new Array<Book>();
    const book1 = new Book('123', '123', 123);
    this.books.push(book1);
  }

  addNewBook(book: Book) {
    if (book.author === 'James') {
      this.bookAddedEvent.error('Books by James are not allowed')
    } else {
      this.books.push(book);
      this.bookAddedEvent.emit(book)
    }
  }

  removeLastBook() {
    if (this.books.length > 0) {
      // @ts-ignore
      let author:string = this.books.pop().author;
      this.bookDeletedEvent.emit(author);
    } else {
      this.bookDeletedEvent.error('No books in the library!');
    }
  }

  getBooksAmount(): number {
    return this.books.length;
  }


}
