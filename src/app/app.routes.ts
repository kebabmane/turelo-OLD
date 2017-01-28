import { Routes, RouterModule } from '@angular/router';

import { FeedEntriesComponent } from './feed-entries/feed-entries.component';
import { FeedsComponent } from './feeds/feeds.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: '', redirectTo: 'feeds', pathMatch : 'full'},
  {path: 'feeds', component: FeedsComponent}
];

export const routing = RouterModule.forRoot(routes);
