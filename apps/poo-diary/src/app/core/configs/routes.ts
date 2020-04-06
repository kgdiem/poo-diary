import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'entries',
    loadChildren: () =>
      import('../../entries/entries.module').then(m => m.EntriesModule)
  }
];
