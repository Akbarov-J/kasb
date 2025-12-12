import { Component, input, inject } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ButtonDirective, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  title = input.required<string>();
  subTitle = input.required<string>();
  imgLink = input.required<string>();
  buttonRoute = input<string>();
  roleId = input<number>();

  router = inject(Router);

  handleButtonClick() {
    const route = this.buttonRoute();
    const role = this.roleId();

    if (route && role) {
      localStorage.setItem('roleId', role.toString());
      this.router.navigateByUrl(route);
    } else {
      this.router.navigateByUrl('/sign-in');
    }
  }
}
