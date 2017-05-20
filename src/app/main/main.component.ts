import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  routes: Object[] = [
    {
      title: 'Timeline',
      route: '/timeline',
      icon: 'business',
    },
    {
      title: 'Categories',
      route: '/categories',
      icon: 'shop',
    },
    {
      title: 'Feeds',
      route: '/feeds',
      icon: 'shop',
    },    
  ];

  constructor(public _authService: AuthService,
              private _router: Router) {

    this._authService.user$.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.displayName;
          this.user_email = auth.email;
          console.log("Logged in");
          console.log(auth);
        }
      }
    )
  }


  logout() {
    this._authService.signOut()
    this._router.navigate(['/login']);
  }

}
