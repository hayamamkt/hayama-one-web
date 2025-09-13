import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'todos',
    loadComponent: () =>
        loadRemoteModule('todos', './Component').then((m) => m.App),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
