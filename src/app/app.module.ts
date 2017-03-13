import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedEntriesComponent } from './feed-entries/feed-entries.component';
import { TureloAPIService } from './turelo-api.service';
import { FeedsComponent } from './feeds/feeds.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FeedEntryComponent } from './feed-entry/feed-entry.component';
import { routing } from './app.routes';
import { FeedComponent } from './feed/feed.component';

import 'hammerjs';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedEntriesComponent,
    FeedEntryComponent,
    FeedsComponent,
    TimelineComponent,
    FeedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MomentModule,
    FlexLayoutModule.forRoot(),
    routing
  ],
  providers: [TureloAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
