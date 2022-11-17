import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {bootstrapApplication} from "@angular/platform-browser";
import {Book} from "../model/Book";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  private dataService:DataService;

  constructor(dataService:DataService) {
    this.dataService=dataService;
  }

  ngOnInit(): void {
  }

  removeLastBook(){
    this.dataService.removeLastBook();
  }

  getBooksAmount():number{
    return this.dataService.getBooksAmount();
  }

  addNewBook(){
    this.dataService.addNewBook(new Book("Book","Matt",123));
  }


}
