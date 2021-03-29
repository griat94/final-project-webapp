import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = "http://localhost:8080/"

  constructor(
    private http: HttpClient
  ) { }

  getText() {
    return this.http.get(this.baseUrl + "sayHello");
  }
}

