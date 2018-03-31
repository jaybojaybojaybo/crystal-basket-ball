import { Component, OnInit } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})

export class BoardsComponent implements OnInit {

  boards: Board[] = [
    {id: 1, name: "Work"},
    {id: 2, name: "Family"},
    {id: 3, name: "Chores"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
