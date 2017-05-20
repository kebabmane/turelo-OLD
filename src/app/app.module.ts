import {NgModule, ErrorHandler, Type} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AuthGuard } from '../auth/guards/auth-guard';
import { UnauthGuard } from '../auth/guards/unauth-guard';
import { AuthService } from '../auth/services/auth-service';
import { CovalentCoreModule } from '@covalent/core';
import { FirebaseModule } from '../firebase';
import { AngularFireModule} from 'angularfire2';
import { appRoutes, appRoutingProviders } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FeedEntriesComponent } from './feed-entries/feed-entries.component';
import { TureloAPIService } from './turelo-api.service';
import { FeedsComponent } from './feeds/feeds.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FeedEntryComponent } from './feed-entry/feed-entry.component';
import { FeedComponent } from './feed/feed.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedEntriesComponent,
    FeedEntryComponent,
    FeedsComponent,
    TimelineComponent,
    FeedComponent,
    MainComponent,
    ProfileComponent,
    EntryComponent,
    LoginComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CovalentCoreModule,
    FormsModule,
    HttpModule,
    MomentModule,
    FlexLayoutModule,
    appRoutes,
    FirebaseModule,
  ],
  providers: [
    TureloAPIService,
    appRoutingProviders,
    Title,
    AuthGuard,
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
