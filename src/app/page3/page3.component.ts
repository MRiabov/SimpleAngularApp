import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../model/Book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {

  private dataService: DataService;
  private books: Array<Book>
  private numberOfBooksWrittenByMatt = 0;
  private mattSubscription!: Subscription;
  private jamesSubscription!: Subscription;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.books = this.dataService.books
  }

  ngOnDestroy(): void {
    this.mattSubscription.unsubscribe();
    this.jamesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.numberOfBooksWrittenByMatt = this.books.filter((book) => book.author = 'Matt').length;
    this.dataService.bookAddedEvent.subscribe(
      newBook => {
        if (newBook.author === 'Matt') this.numberOfBooksWrittenByMatt++
      },
      error => {
        console.log('An error has occured!', error)
      }
    )
    this.dataService.bookDeletedEvent.subscribe(
      author => {
        if (author === 'Matt') {
          this.numberOfBooksWrittenByMatt--;
          alert(`The book deleted had an author ${author}`)
        }

      },
      error => alert(`An error has occurred! ${error}`)
    )
  }

  removeLastBook() {
    this.dataService.removeLastBook();
  }

  getBooksAmount(): number {
    return this.dataService.getBooksAmount();
  }

  getNumberOfBooksWrittenByMatt(): number {
    return this.numberOfBooksWrittenByMatt;
  }

  addNewBook() {
    this.dataService.addNewBook(new Book("Book", "Matt", 123));
  }

  addNewBook2() {
    this.dataService.addNewBook(new Book('Book', 'James', 123))
  }

}
