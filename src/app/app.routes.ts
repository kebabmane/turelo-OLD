import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FeedEntriesComponent } from './feed-entries/feed-entries.component';
import { FeedsComponent } from './feeds/feeds.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EntryComponent } from './entry/entry.component';
import { AuthService } from '../auth/services/auth-service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent, children:
  [
    { path: '', redirectTo: '/timeline', pathMatch: 'full' },
    { path: 'feeds', component: FeedsComponent },
    { path: 'feeds/feed_entries/:id', component: FeedEntriesComponent },
    { path: 'feeds/feed_entries/:id/:link', component: EntryComponent }
  ], },
  { path: '**', component: LoginComponent },
];


export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
