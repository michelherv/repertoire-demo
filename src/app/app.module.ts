import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services';
import {
  AdresseComponent,
  UtilisateurComponent
} from './composants';
import {
  DetailComponent,
  ListComponent
} from './views';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,

    AdresseComponent,
    UtilisateurComponent,

    DetailComponent,
    ListComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
