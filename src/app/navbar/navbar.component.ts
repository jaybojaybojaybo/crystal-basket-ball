import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  boards: Board[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards.slice(0,100));
  }
}
