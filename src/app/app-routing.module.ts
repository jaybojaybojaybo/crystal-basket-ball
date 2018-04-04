import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardsComponent } from './boards/boards.component';
import { ListsComponent } from './lists/lists.component';
import { CardsComponent } from './cards/cards.component';
import { BoardViewComponent } from './board-view/board-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'boards', component: BoardsComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'board-view/:id', component: BoardViewComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
