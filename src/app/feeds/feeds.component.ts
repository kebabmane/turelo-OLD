import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { TureloAPIService } from '../turelo-api.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
    feeds;

    constructor(
      private _tureloAPIService: TureloAPIService,
      private route: ActivatedRoute
    ) {}

    ngOnInit() {
      this._tureloAPIService.fetchFeeds()
            .subscribe(
                      feeds => this.feeds = feeds,
                      error => console.log('Error fetching feeds'));
                }
}
