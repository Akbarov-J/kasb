import { Routes } from '@angular/router';
import { MainLayoutComponent } from './features/client/layout/main-layout/main-layout';
import SignIn from './features/client/auth/pages/sign-in/sign-in';
import { CabinetLayout } from './features/cabinet/cabinet-layout/pages/cabinet-layout/cabinet-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'main',
        loadComponent: () => import('./features/client/main/pages/main/main'),
      },
      {
        path: 'students',
        loadComponent: () => import('./features/client/student/pages/students-page/students-page'),
      },
      {
        path: 'psychologist',
        loadComponent: () =>
          import('./features/client/psychologist/pages/psychologist/psychologist'),
      },
      {
        path: 'users',
        loadComponent: () => import('./features/client/users/pages/users/users'),
      },
      {
        path: 'professions',
        loadComponent: () => import('./features/client/professions/pages/professions/professions'),
      },
      {
        path: 'professions-details',
        loadComponent: () =>
          import('./features/client/professions/pages/professions-details/professions-details'),
      },
      {
        path: 'certificate',
        loadComponent: () => import('./features/client/certificate/pages/certificate/certificate'),
      },
    ],
  },
  {
    path: 'cabinet',
    component: CabinetLayout,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./features/cabinet/profile/pages/profile.routes'),
      },
      {
        path: 'user-list',
        loadComponent: () => import('./features/cabinet/user-list/user-list'),
      },
      {
        path: 'survey-results',
        loadComponent: () => import('./features/cabinet/surveys/pages/surveys/surveys'),
      },
      {
        path: 'certificate-verification',
        loadComponent: () => import('./features/cabinet/certificate-verification/certificate-verification'),
      },
      {
        path: 'course-list',
        loadComponent: () => import('./features/cabinet/courses/pages/course-list/course-list'),
      },
      {
        path: 'certificate',
        loadComponent: () =>
          import('./features/cabinet/my-certificates/pages/my-certificates/my-certificates'),
      },
      {
        path: 'surveys',
        loadComponent: () => import('./features/cabinet/surveys/pages/surveys/surveys'),
      },
      {
        path: 'psychological-counseling',
        loadComponent: () =>
          import(
            './features/cabinet/psychological-counseling/pages/psychological-counseling/psychological-counseling'
          ),
      },
    ],
  },
  {
    path: 'sign-in',
    component: SignIn,
  },
];
