import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardsComponent } from '../boards/boards.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boards: Board[] = [
    {id: 1, name: "Work"},
    {id: 2, name: "Family"},
    {id: 3, name: "Chores"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
