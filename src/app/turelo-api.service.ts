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

  fetchFeed(GUID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/feed?GUID=${GUID}`)
                    .map(response => JSON.parse(response.json()).Items);
  }

  fetchFeedEntries(FeedGUID: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/feeds/feed_entries?FeedGUID=${FeedGUID}`)
                    .map(response => JSON.parse(response.json()).Items);
  }

  fetchFeedEntry(link: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/feeds/feed_entry?link=${link}`)
                    .map(response => JSON.parse(response.json()).Item);
  }

}

export class TureloApiService {}
