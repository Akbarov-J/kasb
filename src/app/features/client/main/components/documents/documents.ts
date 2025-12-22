import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-documents',
  imports: [FormsModule, SelectButton],
  templateUrl: './documents.html',
  styleUrl: './documents.scss',
})
export class Documents {
  selectedType = signal<number>(1);

  typeOptions = signal<any>([
    { label: 'Dasturlar', value: 1 },
    { label: 'Qarorlar', value: 2 },
  ]);
}
