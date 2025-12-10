import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChooseRole } from '../../components/choose-role/choose-role';
import { SelectButton } from 'primeng/selectbutton';
import { UserRole } from '../../components/user-role/user-role';
import { OneId } from '../../components/one-id/one-id';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, ChooseRole, SelectButton, UserRole, OneId],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export default class SignIn {
  isChooseRole = signal<number | null>(null);

  selectedRole = signal<number | null>(null);

  stateOptions = signal<any>([
    { label: 'O‘quvchi', value: 1 },
    { label: 'Foydalanuvchi', value: 2 },
    { label: 'Psixolog', value: 3 },
    { label: 'Direktor', value: 4 },
  ]);

  router = inject(Router);

  gotoOneId() {}

  selectRole(event: any) {
    this.selectedRole.set(event);
  }

  goToAdmin() {
    localStorage.setItem('roleId', this.selectedRole() + '');

    this.router.navigateByUrl('/cabinet/profile');
  }
}
