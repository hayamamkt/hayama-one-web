import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works.page').then(m => m.WorksPage),
    children: [
      {
        path: 'todos',
        loadComponent: () =>
          loadRemoteModule('todos', './Component').then((m) => m.App),
      }
    ]
  },
  // {
  //   path: 'todos',
  //   loadComponent: () =>
  //       loadRemoteModule('todos', './Component').then((m) => m.App),
  // },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  // },
  // {
  //   path: 'contact',
  //   loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
