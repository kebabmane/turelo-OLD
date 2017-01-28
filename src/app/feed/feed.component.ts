import { Component, Input, OnInit } from '@angular/core';
import { TureloAPIService } from '../turelo-api.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() feedID: number;

  constructor(private _tureloAPIService: TureloAPIService) {}

  ngOnInit() {
  }

}
