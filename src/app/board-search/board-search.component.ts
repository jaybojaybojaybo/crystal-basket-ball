import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Board } from '../board';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-search',
  templateUrl: './board-search.component.html',
  styleUrls: [ './board-search.component.css' ]
})
export class BoardSearchComponent implements OnInit {
  boards$: Observable<Board[]>;
  private searchTerms = new Subject<string>();

  constructor(private boardService: BoardService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.boards$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.boardService.searchBoards(term)),
    );
  }
}
