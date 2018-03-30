import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { FireTeamsComponent } from './fire-teams/fire-teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './boards/boards.component';
import { ListsComponent } from './lists/lists.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FireTeamsComponent,
    DashboardComponent,
    BoardsComponent,
    ListsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
