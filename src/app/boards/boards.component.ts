import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../board';
import { BoardService } from '../board.service';
import { List } from '../list';
import { Card } from '../card';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})

export class BoardsComponent implements OnInit {

  boards: Board[];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.getBoards();
    let testboards = this.getBoards();
    console.log(testboards);
  }

  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.boardService.addBoard({ name } as Board)
      .subscribe(board => {
        this.boards.push(board);
      });
  }

  delete(board: Board): void {
    this.boards = this.boards.filter(h => h !== board);
    this.boardService.deleteBoard(board).subscribe();
  }

}
