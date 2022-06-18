import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { Spend } from '../models/spend';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  private url = environment.baseUrl + 'api/spending';

  constructor(private http: HttpClient, private datePipe: DatePipe) { }
  // , private datePipe: DatePipe

  index(): Observable<Spend[]> {
    return this.http.get<Spend[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving spending: ' + err)
        );
      })
    );
  }

  create(spend: Spend): Observable<Spend> {

    return this.http.post<Spend>(this.url, spend).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('SpendService.create(): error creating spend: ' + err)
        );
      })
    );
  }

  update(spend: Spend): Observable<Spend> {
    if (spend.completed) {
      // spend.completeDate = this.datePipe.transform(Date.now(), 'shortDate');
    } else {
      spend.completeDate = '';
    }

    return this.http.put<Spend>(this.url + '/' + spend.id, spend).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('SpendService.update(): error updating spend: ' + err)
        );
      })
    );
  }

  destroy(id: number): Observable<Spend> {
    return this.http.delete<Spend>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('SpendService.delete(): error deleting spend: ' + err)
        );
      })
    );
  }

  show(id: number): Observable<Spend> {
    return this.http.get<Spend>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('SpendService.show(): error retrieving spend: ' + err)
        );
      })
    );
  }



}
