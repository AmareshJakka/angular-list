import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl ='http://openlibrary.org/people/george08/lists.json'
 
  constructor(private http: HttpClient) { }

  getList() {
  
    return this.http.get(`${this.baseUrl}`);
  }
}
