import { Routes } from '@angular/router';
import { ListComponent } from './views/user';


export const APP_ROUTES: Routes = [
  {
    path: 'utilisateurs',
    children: [
      {
        path: '',
        component: ListComponent
      }
    ]
  }, {
    path: '',
    redirectTo: 'utilisateurs',
    pathMatch: 'full'
  }
];
