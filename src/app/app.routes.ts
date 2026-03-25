import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'sobre',
    loadComponent: () => import('./sobre/sobre.page').then(m => m.SobrePage),
  },
];
