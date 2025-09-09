import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [

  { path: '', component: HomePage },
  {
    path: 'works',
    loadComponent: () =>
        loadRemoteModule('works', './Component').then((m) => m.App),
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
  }
];
