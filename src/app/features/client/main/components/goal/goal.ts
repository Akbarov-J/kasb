import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-goal',
  imports: [FormsModule, SelectButton, RouterLink],
  templateUrl: './goal.html',
  styleUrl: './goal.scss',
})
export class Goal {
  value: number = 1;

  paymentOptions: any[] = [
    { name: 'O‘quvchi', value: 1 },
    { name: 'Ota-ona', value: 2 },
    { name: 'Psixolog', value: 3 },
    { name: 'Direktor', value: 4 },
  ];
}
