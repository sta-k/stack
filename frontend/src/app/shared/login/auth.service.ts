import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpClient: HttpClient) { }

  login(user) {
    return this.httpClient.post<any>('/api-token-auth/', user).pipe(map(resp => {
      // login successful if there's a jwt token in the response
      if (resp && resp.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', resp.token);
      }
      return resp;
    }));
  }

  logout() {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    // return this.httpClient.get('/dashboard/logout/?token='+token);
  }

}
