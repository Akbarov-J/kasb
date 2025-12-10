import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-choose-role',
  imports: [FormsModule, RadioButton],
  templateUrl: './choose-role.html',
  styleUrl: './choose-role.scss',
})
export class ChooseRole {
  selectedRole = signal<number | null>(null);

  selectRole = output<number>();

  submit() {
    console.log(this.selectedRole());

    this.selectRole.emit(this.selectedRole()!);
  }
}
