import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';

import { TureloAPIService } from '../turelo-api.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() link:  string;
  entry;

  constructor(
    private _tureloAPIService: TureloAPIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
        const link = params;
        console.log(link.link);
    this._tureloAPIService.fetchFeedEntry(link.link).subscribe(data => {
      this.entry = data;
      }, error => console.log('Could not load feed entry' + link.link));
    });
  }
}
