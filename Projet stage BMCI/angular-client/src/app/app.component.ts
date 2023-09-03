import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intranet';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  get username(): string | undefined {
    return this.authService.username;
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }

}
