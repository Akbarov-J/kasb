import { Component, input } from '@angular/core';
import { NgClass } from '../../../../../../../node_modules/@angular/common/types/_common_module-chunk';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

interface ISideBar {
  icon: string;
  title: string;
  url: string;
  permissions: IRole[];
}

enum IRole {
  STUDENT = 1,
  USER = 2,
  PSYCHOLOGIST = 3,
  DIRECTOR = 4,
  MANAGER = 5,
}

@Component({
  selector: 'app-cabinet-side-bar',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './cabinet-side-bar.html',
  styleUrl: './cabinet-side-bar.scss',
})
export class CabinetSideBar {
  menu: ISideBar[] = [
    {
      icon: 'pi-home',
      title: 'Bosh Sahifa',
      url: '/main',
      permissions: [IRole.STUDENT, IRole.USER, IRole.PSYCHOLOGIST, IRole.DIRECTOR],
    },
    {
      icon: 'pi-user',
      title: 'Profil',
      url: '/cabinet/profile/student',
      permissions: [IRole.STUDENT],
    },
    {
      icon: 'pi-user',
      title: 'Profil',
      url: '/cabinet/profile/user',
      permissions: [IRole.USER],
    },
    {
      icon: 'pi-user',
      title: 'Profil',
      url: '/cabinet/profile/psychologist',
      permissions: [IRole.PSYCHOLOGIST],
    },
    {
      icon: 'pi-user',
      title: 'Profil',
      url: '/cabinet/profile/director',
      permissions: [IRole.DIRECTOR],
    },
    {
      icon: 'pi-user',
      title: 'Profil',
      url: '/cabinet/profile/manager',
      permissions: [IRole.MANAGER],
    },
    {
      icon: 'pi-users',
      title: "O'quvchilar",
      url: '/cabinet/user-list',
      permissions: [IRole.DIRECTOR],
    },
    {
      icon: 'pi-user-edit',
      title: 'Psixologlar',
      url: '/cabinet/psychologist-list',
      permissions: [IRole.DIRECTOR],
    },
    {
      icon: 'pi-chart-bar',
      title: "So'rovnomalar natijalari",
      url: '/cabinet/survey-results',
      permissions: [IRole.DIRECTOR],
    },
    {
      icon: 'pi-check-circle',
      title: 'Sertifikatni tasdiqlash',
      url: '/cabinet/certificate-verification',
      permissions: [IRole.DIRECTOR, IRole.MANAGER],
    },
    {
      icon: 'pi-database',
      title: 'Kurslar',
      url: '/cabinet/course-list',
      permissions: [IRole.STUDENT, IRole.USER, IRole.PSYCHOLOGIST],
    },
    {
      icon: 'pi-star',
      title: 'Sertifikatlarim',
      url: '/cabinet/certificate',
      permissions: [IRole.STUDENT, IRole.USER, IRole.PSYCHOLOGIST],
    },
    {
      icon: 'pi-comment',
      title: "So'rovnomalar",
      url: '/cabinet/surveys',
      permissions: [IRole.STUDENT, IRole.PSYCHOLOGIST],
    },
    {
      icon: 'pi-comments',
      title: 'Psixologik maslahat',
      url: '/cabinet/psychological-counseling',
      permissions: [IRole.PSYCHOLOGIST],
    },
  ];

  roleId = input.required<number>();

  ngOnInit() {}
}
