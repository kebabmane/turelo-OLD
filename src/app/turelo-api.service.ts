import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TureloAPIService {
baseUrl: string;

constructor(private http: Http) {
  this.baseUrl = 'https://siowzm2t70.execute-api.us-east-1.amazonaws.com/development';
}

  fetchFeeds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/feeds`)
                    .map(response => JSON.parse(response.json()).Items);
  }

  fetchFeed(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
                    .map(response => response.json());
  }
}
