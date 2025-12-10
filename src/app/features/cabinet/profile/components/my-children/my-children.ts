import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-my-children',
  imports: [ButtonDirective, Dialog, ButtonModule, InputTextModule, Select, DatePicker],
  templateUrl: './my-children.html',
  styleUrl: './my-children.scss',
})
export class MyChildren {
  visible: boolean = false;

  documentTypes = [
    { name: 'Passport', code: 'NY' },
    { name: 'Fuqarolik passporti (JSHSHIR)', code: 'RM' },
  ];

  showDialog() {
    this.visible = true;
  }
}
