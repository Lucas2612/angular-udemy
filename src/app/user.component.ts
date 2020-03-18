import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="name">
  <input type="text" #nome (input)="onUserInputRef(nome)">
  <input type="text" [(ngModel)]="name">
  <p>Hello  {{ name }} </p>
  <p>I am user component<p>
  `
})
export class UserComponent {
  @Input() name = 'Max';

  onUserInput(event) {
    this.name = event.target.value;
  }

  onUserInputRef(elemento) {
    this.name = elemento.value;
  }
}
