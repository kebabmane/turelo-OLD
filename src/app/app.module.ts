import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import 'hammerjs';
import { FeedEntriesComponent } from './feed-entries/feed-entries.component';
import { TureloAPIService } from './turelo-api.service';
import { FeedsComponent } from './feeds/feeds.component';
import { TimelineComponent } from './timeline/timeline.component';

import { routing } from './app.routes';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedEntriesComponent,
    FeedsComponent,
    TimelineComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MomentModule,
    FlexLayoutModule.forRoot(),
    routing
  ],
  providers: [TureloAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
