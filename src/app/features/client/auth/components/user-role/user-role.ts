import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    InputTextModule,
    DatePicker,
    PasswordModule,
    RouterLink,
    ButtonDirective,
  ],
  templateUrl: './user-role.html',
  styleUrls: ['./user-role.scss'],
})
export class UserRole {
  documentTypes = [
    { name: 'Passport', code: 'NY' },
    { name: 'Fuqarolik passporti (JSHSHIR)', code: 'RM' },
  ];

  signIn = output<void>();

  goToAdmin() {
    this.signIn.emit();
  }
}
