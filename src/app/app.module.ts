import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { FireTeamsComponent } from './fire-teams/fire-teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './boards/boards.component';
import { ListsComponent } from './lists/lists.component';
import { CardsComponent } from './cards/cards.component';
import { MessagesComponent } from './messages/messages.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { BoardSearchComponent } from './board-search/board-search.component';

import { BoardService } from './board.service';
import { ListService } from './list.service';
import { CardService } from './card.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FireTeamsComponent,
    DashboardComponent,
    BoardsComponent,
    ListsComponent,
    CardsComponent,
    MessagesComponent,
    BoardViewComponent,
    BoardSearchComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [
    BoardService,
    ListService,
    CardService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
