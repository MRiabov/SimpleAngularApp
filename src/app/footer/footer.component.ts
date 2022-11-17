import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  public lastAccessed='';

  constructor(private dataService:DataService) {}


  ngOnInit(): void {
  }

  onAccess(access: string){
    this.lastAccessed=access;
  }

}
