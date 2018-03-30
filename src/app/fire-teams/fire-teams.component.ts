import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-fire-teams',
  templateUrl: './fire-teams.component.html',
  styleUrls: ['./fire-teams.component.css']
})

export class FireTeamsComponent implements OnInit {
  //all async observables are retreived as fireTeamsObservable.
  public fireTeamsObservable: Observable<any[]>;

  //injecting Angular Firebase service into the constructor.
  constructor(private db: AngularFireDatabase) { }

  //getData is called in ngOnInit in order to make the request for data when this component is initialized and store it in an observable for use later.
  ngOnInit() {
    this.fireTeamsObservable = this.getData('crystal-basket-ball');
     //'crystal-basket-ball' is the firebase database title
  }

  //passes crystal-basket-ball as the firebase-side path to connect to our local firebase Component
  //returns a list of every intance in the database via the valueChanges() method
  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
