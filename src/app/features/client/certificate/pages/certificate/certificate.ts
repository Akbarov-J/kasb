import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButton } from 'primeng/selectbutton';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-certificate',
  imports: [SelectButton, FormsModule, InputTextModule, ButtonDirective],
  templateUrl: './certificate.html',
  styleUrl: './certificate.scss',
})
export default class Certificate {
  selectedRole = signal<number>(1);

  stateOptions = signal<any>([
    { label: 'O‘quvchilar uchun', value: 1 },
    { label: 'Pedagoglar uchun', value: 2 },
  ]);
}
