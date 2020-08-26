import { Component } from '@angular/core';
import { container } from './inversify.config';
import { MyOtherClass } from './myOtherClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;

  constructor () {
    const myOtherClass = container.get<MyOtherClass>(MyOtherClass);
    this.title = myOtherClass.name;
  }
}
