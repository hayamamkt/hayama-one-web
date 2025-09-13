import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todos',
    loadComponent: () =>
        loadRemoteModule('todos', './Component').then((m) => m.App),
  }
];
