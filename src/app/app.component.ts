import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'untitled';

  @ViewChild('page2Component')
  page2Component!:Page2Component;

  startTime: string='';

  @ViewChild('footerComponent')
  footerComponent!: FooterComponent;

  updateLastAccessed(){
    console.log(this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime=new Date().toString();
  }

  incrementHitCounter(){
    this.page2Component.incrementHitCounter();
  }
}
