import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
  public lastAccessed='';

  constructor() {}


  ngOnInit(): void {
  }

  onAccess(access: string){
    this.lastAccessed=access;
  }

}
