import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { Certificates } from '../../../../../shared/components/certificates/certificates';

@Component({
  selector: 'app-my-certificates',
  imports: [SelectButton, FormsModule, Certificates],
  templateUrl: './my-certificates.html',
  styleUrl: './my-certificates.scss',
})
export default class MyCertificates {
  selectedRole = signal<number>(1);

  stateOptions = signal<any>([
    { label: 'Kurslar sertifikati', value: 1 },
    { label: 'Kasb sertifikati', value: 2 },
  ]);
}
