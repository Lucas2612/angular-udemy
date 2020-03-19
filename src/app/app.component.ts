import { Component } from '@angular/core';
import { random } from 'lodash';


declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  nameParent = 'Max';

  number = 0;

  onNameChanged(newName) {
    console.log('onNameChanged' + newName);
    this.nameParent = newName;
  }

  onIncrease() {
    // this.number = this.number * 2;
    this.number = random(1, 10);
  }
}
