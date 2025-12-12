import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChooseRole } from '../../components/choose-role/choose-role';
import { SelectButton } from 'primeng/selectbutton';
import { UserRole } from '../../components/user-role/user-role';
import { OneId } from '../../components/one-id/one-id';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, ChooseRole, SelectButton, UserRole, OneId],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export default class SignIn {
  isChooseRole = signal<number | null>(null);

  selectedRole = signal<number | null>(null);
  preselected = signal<boolean>(false);

  stateOptions = signal<any>([
    { label: "O'quvchi", value: 1 },
    { label: 'Foydalanuvchi', value: 2 },
    { label: 'Psixolog', value: 3 },
    { label: 'Direktor', value: 4 },
  ]);

  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit() {
    const roleParam = this.route.snapshot.queryParamMap.get('role');
    const role = roleParam ? +roleParam : null;
    if (role) {
      this.selectedRole.set(role);
      this.preselected.set(true);
    }
  }

  gotoOneId() {}

  selectRole(event: any) {
    this.selectedRole.set(event);
  }

  goToAdmin() {
    localStorage.setItem('roleId', this.selectedRole() + '');

    const roleRoutes: { [key: number]: string } = {
      1: '/cabinet/profile/student',
      2: '/cabinet/profile/user',
      3: '/cabinet/profile/psychologist',
      4: '/cabinet/profile/director',
      5: '/cabinet/profile/manager',
    };

    const route = roleRoutes[this.selectedRole()!] || '/cabinet/profile/student';
    this.router.navigateByUrl(route);
  }
}
