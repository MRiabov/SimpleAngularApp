import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {Book} from "./model/Book";

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addNewBook increases the size of the books array', () =>{
    let sizeStart = service.books.length;
    service.addNewBook(new Book('123','123',123));
    expect(service.books.length).toBe(sizeStart+1)
  })

  it('event emitter should run an event when a book is added', function () {
    spyOn(service.bookAddedEvent, 'emit');
    service.addNewBook(new Book('123','123',123));
    expect(service.bookAddedEvent.emit).toHaveBeenCalled();
  });
});
