import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Board } from '../board';
import { BoardService } from "../board.service";
import { List } from '../list';
import { ListService } from "../list.service";

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit {

  @Input() board: Board;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private location: Location
  ) { }

  ngOnInit():  void {
    this.getBoard();
  }

  getBoard(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.boardService.getBoard(id)
      .subscribe(board => this.board = board);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.boardService.updateBoard(this.board)
      .subscribe(() => this.goBack());
  }

  delete(board: Board): void {
    this.boardService.deleteBoard(this.board)
      .subscribe(() => this.goBack());
  }

}
