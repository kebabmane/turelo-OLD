import { Component, Input, OnInit } from '@angular/core';
import { TureloAPIService } from '../turelo-api.service';

@Component({
  selector: 'feedEntry',
  templateUrl: './feed-entry.component.html',
  styleUrls: ['./feed-entry.component.scss']
})
export class FeedEntryComponent implements OnInit {

  @Input() link: string;
  feedEntry;

  constructor(private _tureloAPIService: TureloAPIService) {}

  ngOnInit() {
    this._tureloAPIService.fetchFeedEntry(this.link).subscribe(data => {
      this.feedEntry = data;
      }, error => console.log('Could not load feed' + this.link));
  }
}


