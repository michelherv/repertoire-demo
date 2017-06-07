import { Routes } from '@angular/router';
import {
  DetailComponent,
  ListComponent
} from './views/user';


export const APP_ROUTES: Routes = [
  {
    path: 'utilisateurs',
    children: [
      {
        path: '',
        component: ListComponent
      }, {
        path: ':id',
        component: DetailComponent
      }
    ]
  }, {
    path: '',
    redirectTo: 'utilisateurs',
    pathMatch: 'full'
  }
];
