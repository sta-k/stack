import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {AuthService} from './login/auth.service';
import {environment} from '../../environments/environment';


@Injectable()
export class SharedInterceptor implements HttpInterceptor {
  loader = this.loadingBar.useRef();
  constructor (private auth: AuthService, private loadingBar: LoadingBarService) {
  }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({url: environment.serverUrl + req.url});
    
    const idToken = localStorage.getItem('token');
    if (idToken) {
      req = req.clone({
        headers: req.headers.set('Authorization','Token ' + idToken)
      });
    }

    this.loader.start();
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        this.auth.logout();
        location.reload(true);
      }
      return throwError(err);
    }),
      tap((event: HttpEvent<any>) => {
          // https://medium.com/@zeljkoradic/loader-bar-on-every-http-request-in-angular-6-60d8572a21a9
          if (event instanceof HttpResponse) {
            this.loader.complete()
          }
        },
        (err: any) => {
          this.loader.complete()
        }
      )
    );

  }
}