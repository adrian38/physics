import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';
import { UtilsService } from '../services/utils.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    // private spinner: NgxSpinnerService,
    private _utilsService: UtilsService
  ) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = localStorage.getItem('access_token') || '';
    this._utilsService.resposeError = false;
    return next
      .handle(
        httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      )
      .pipe(
        tap((evt) => {
          if (evt instanceof HttpResponse) {
            if (evt.body && evt.body.success)
              console.log(evt.body.success.message, evt.body.success.title, {
                positionClass: 'error 1',
              });
          }
        }),
        catchError((err: any) => {
          this._utilsService.resposeError = true;
          if (err instanceof HttpErrorResponse) {
            try {
              if (err.status === 401) {
                console.error('Response error:', err);
              } else {
                this.router.navigate(['/error']);
                console.error('Response error:', err);
              }
            } catch (e) {
              this.router.navigate(['/error']);
              console.error('An error occurred', err, e);
            }
          }
          return of(err);
        })
      );
    // .pipe(
    //     catchError((err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //         if (err.status === 403) {
    //             console.info('err.error =', err.error, ';');
    //         }
    //         return Observable.throw(err);
    //     }
    // }));
  }
}
