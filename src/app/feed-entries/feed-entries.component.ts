import { Component, Input, OnInit } from '@angular/core';
import { TureloAPIService } from '../turelo-api.service';

@Component({
  selector: 'feed-entries',
  templateUrl: './feed-entries.component.html',
  styleUrls: ['./feed-entries.component.scss']
})
export class FeedEntriesComponent implements OnInit {
  @Input() FeedGUID: string;
  feedEntries;

  constructor(private _tureloAPIService: TureloAPIService) {}

  ngOnInit() {
    this._tureloAPIService.fetchFeedEntries(this.FeedGUID)
        .subscribe(
            feedEntries => this.feedEntries = feedEntries,
            error => console.log('Error fetching feeds'));
  }
}
