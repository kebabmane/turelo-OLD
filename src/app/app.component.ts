import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth-service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public _authService: AuthService, private router: Router) {

  }
}
