import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

	constructor(private http: HttpClient) { }
  baseUrl: string = '/api/';

  getItems() {
    return this.http.get<any[]>(this.baseUrl);
  }

  add(title: string) {
    return this.http.post(this.baseUrl, title);
  }

  remove(id: number) {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
