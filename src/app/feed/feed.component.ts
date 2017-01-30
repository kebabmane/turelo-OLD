import { Component, Input, OnInit } from '@angular/core';
import { TureloAPIService } from '../turelo-api.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    @Input() GUID: string;
    feed;

    constructor(private _tureloAPIService: TureloAPIService) {}

    ngOnInit() {
      this._tureloAPIService.fetchFeed(this.GUID).subscribe(data => {
        this.feed = data;
        }, error => console.log('Could not load feed' + this.GUID));
    }
}
