import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Page3Component} from './page3.component';
import {DataService} from "../data.service";
import {Book} from "../model/Book";

describe('Page3Component', () => {
  let component: Page3Component;
  let fixture: ComponentFixture<Page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page3Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment number of books written by matt correctly', () => {
    const startValue = component.getNumberOfBooksWrittenByMatt();
    const dataService = fixture.debugElement.injector.get(DataService)
    component.addNewBook();
    expect(component.getNumberOfBooksWrittenByMatt).toEqual(startValue + 1)
  });


});
