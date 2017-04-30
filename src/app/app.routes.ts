import { Routes, RouterModule } from '@angular/router';

import { FeedEntriesComponent } from './feed-entries/feed-entries.component';
import { FeedsComponent } from './feeds/feeds.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch : 'full'},
  {path: 'feeds', component: FeedsComponent},
  {path: 'feeds/feed_entries/:id', component: FeedEntriesComponent}
];

export const routing = RouterModule.forRoot(routes);
