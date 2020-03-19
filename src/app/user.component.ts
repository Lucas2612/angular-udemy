import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="name">
  <!-- <input type="text" #nome (input)="onUserInputRef(nome)"> -->
  <!-- <input type="text" [(ngModel)]="name">
  --> <p>Hello  {{ name }} </p>
  <p>I am user component<p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name = 'Max';
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    /* this.name = event.target.value; */
    console.log('onUserInput' + event.target.value);
    this.nameChanged.emit(event.target.value);
  }

  onUserInputRef(elemento) {
    this.name = elemento.value;
  }
}
