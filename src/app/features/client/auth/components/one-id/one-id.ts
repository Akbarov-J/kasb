import { Component, output } from '@angular/core';

@Component({
  selector: 'app-one-id',
  imports: [],
  templateUrl: './one-id.html',
  styleUrl: './one-id.scss',
})
export class OneId {
  signIn = output<void>();

  gotoOneId() {
    this.signIn.emit();
  }
}
