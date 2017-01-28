import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-entries',
  templateUrl: './feed-entries.component.html',
  styleUrls: ['./feed-entries.component.scss']
})
export class FeedEntriesComponent implements OnInit {
  items: number[];

  constructor() {
    this.items = Array(9);
  }

  ngOnInit() {
  }

}
