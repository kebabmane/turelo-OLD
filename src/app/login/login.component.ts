import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/services/auth-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private _authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

  }

  login() {
    this._authService.signInWithGoogle().then((data) => {
      this.router.navigate(['/feeds']);
    })
  }

  logout() {
    this._authService.signOut()
  }

}
