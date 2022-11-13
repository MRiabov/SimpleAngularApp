import {Component, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';

  @ViewChild('footerComponent')
  footerComponent!: FooterComponent;

  updateLastAccessed(){
    console.log(this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }
}
