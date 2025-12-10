import { Routes } from '@angular/router';

export default [
  {
    path: 'student',
    loadComponent: () => import('./profile/profile'),
  },
  {
    path: 'user',
    loadComponent: () => import('./profile-user/profile-user'),
  },
  {
    path: 'psychologist',
    loadComponent: () => import('./profile-psychologist/profile-psychologist'),
  },
];
