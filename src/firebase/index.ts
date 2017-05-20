import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseConfig = {
  apiKey: 'AIzaSyB21yJhwetsUjZtFwmVcLOI6yMi-2dC1-c',
  authDomain: 'turelo-cf17f.firebaseapp.com',
  databaseURL: 'https://turelo-cf17f.firebaseio.com',
  storageBucket: 'turelo-cf17f.appspot.com',
  projectId: 'turelo-cf17f',
  messagingSenderId: '931039540075'
};


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ]
})
export class FirebaseModule {}
