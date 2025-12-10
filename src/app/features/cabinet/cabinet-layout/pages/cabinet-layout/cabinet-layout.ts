import { Component, inject, signal } from '@angular/core';
import { Header } from '../../../../../shared/components/header/header';
import { Footer } from '../../../../../shared/components/footer/footer';
import { CabinetHeader } from '../../components/cabinet-header/cabinet-header';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CabinetSideBar } from '../../components/cabinet-side-bar/cabinet-side-bar';
import { CabinetFooter } from '../../components/cabinet-footer/cabinet-footer';

@Component({
  selector: 'app-cabinet-layout',
  imports: [Footer, CabinetHeader, RouterOutlet, CabinetSideBar, CabinetFooter],
  templateUrl: './cabinet-layout.html',
  styleUrl: './cabinet-layout.scss',
})
export class CabinetLayout {
  route = inject(ActivatedRoute);

  roleId = signal<number>(0);

  user: { imgLink: string; name: string; role: string; workplace?: string } | null = null;

  ngOnInit() {
    let roleId = +(localStorage.getItem('roleId') || 0);

    this.roleId.set(roleId);

    switch (roleId) {
      case 1:
        this.user = {
          imgLink: './assets/imgs/profile/student.png',
          name: 'Ishanxanov Ayyubxon',
          role: 'O‘quvchi',
        };
        break;
      case 2:
        this.user = {
          imgLink: './assets/imgs/profile/user.png',
          name: 'Ishanxanov Ayyubxon',
          role: 'O‘quvchi',
        };
        break;
      case 3:
        this.user = {
          imgLink: './assets/imgs/profile/psychologist.png',
          name: 'Ishanxanov Ayyubxon',
          role: "O'quvchi",
        };
        break;
      case 4:
        this.user = {
          imgLink: './assets/imgs/profile/psychologist.png',
          name: 'Ishanxanov Abror',
          role: 'Direktor',
          workplace: '222-maktab',
        };
        break;
      case 5:
        this.user = {
          imgLink: './assets/imgs/profile/psychologist.png',
          name: 'Ishanxanov Abror',
          role: 'Monomarkaz',
          workplace: '222-maktab',
        };
    }
  }
}
