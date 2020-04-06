import { Routes } from '@angular/router';
import { ListComponent } from '../pages/list/list.component';
import { AddComponent } from '../pages/add/add.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];
