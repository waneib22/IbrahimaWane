import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private as: AuthenticationService)
  { }

  ngOnInit(): void {
      this.formLogin = this.fb.group({
        username: this.fb.control(""),
        password: this.fb.control("")
      })
  }

  handleLogin() {
    let username = this.formLogin.value.username;
    let pwd = this.formLogin.value.password;
    this.as.login(username, pwd).subscribe({
      next: (data): any => {
        this.as.loadProfile(data);
        this.as.setAuthenticationStatus(true);
        this.router.navigateByUrl("/admin");
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
