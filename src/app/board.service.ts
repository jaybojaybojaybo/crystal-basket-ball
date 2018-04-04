import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from './board';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BoardService {

  private boardsUrl = 'api/boards';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET boards from the server */
  getBoards (): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardsUrl)
      .pipe(
        tap(boards => this.log(`fetched boards`)),
        catchError(this.handleError('getBoards', []))
      );
  }

  /** GET board by id. Return `undefined` when id not found */
  getBoardNo404<Data>(id: number): Observable<Board> {
    const url = `${this.boardsUrl}/?id=${id}`;
    return this.http.get<Board[]>(url)
      .pipe(
        map(boards => boards[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} board id=${id}`);
        }),
        catchError(this.handleError<Board>(`getBoard id=${id}`))
      );
  }

  /** GET board by id. Will 404 if id not found */
  getBoard(id: number): Observable<Board> {
    const url = `${this.boardsUrl}/${id}`;
    return this.http.get<Board>(url).pipe(
      tap(_ => this.log(`fetched board id=${id}`)),
      catchError(this.handleError<Board>(`getBoard id=${id}`))
    );
  }

  /* GET boards whose name contains search term */
  searchBoards(term: string): Observable<Board[]> {
    if (!term.trim()) {
      // if not search term, return empty board array.
      return of([]);
    }
    return this.http.get<Board[]>(`api/boards/?name=${term}`).pipe(
      tap(_ => this.log(`found boards matching "${term}"`)),
      catchError(this.handleError<Board[]>('searchBoards', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new board to the server */
  addBoard (board: Board): Observable<Board> {
    return this.http.post<Board>(this.boardsUrl, board, httpOptions).pipe(
      tap((board: Board) => this.log(`added board w/ id=${board.id}`)),
      catchError(this.handleError<Board>('addBoard'))
    );
  }

  /** DELETE: delete the board from the server */
  deleteBoard (board: Board | number): Observable<Board> {
    const id = typeof board === 'number' ? board : board.id;
    const url = `${this.boardsUrl}/${id}`;

    return this.http.delete<Board>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted board id=${id}`)),
      catchError(this.handleError<Board>('deleteBoard'))
    );
  }

  /** PUT: update the board on the server */
  updateBoard (board: Board): Observable<any> {
    return this.http.put(this.boardsUrl, board, httpOptions).pipe(
      tap(_ => this.log(`updated board id=${board.id}`)),
      catchError(this.handleError<any>('updateBoard'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BoardService message with the MessageService */
  private log(message: string) {
    this.messageService.add('BoardService: ' + message);
  }
}
