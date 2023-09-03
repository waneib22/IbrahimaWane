import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: string;

  constructor(
    private http: HttpClient
  ) {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      this.accessToken = storedAccessToken;
    }
  }

  setAuthenticationStatus(status: boolean) {
    this.isAuthenticated = status;
  }

  public login(username: string, password: string) {
    let params = new HttpParams()
      .set("username", username)
      .set("password", password);
    let options = {
      headers: new HttpHeaders()
        .set("Content-Type", "application/x-www-form-urlencoded")
    };
    return this.http.post("http://localhost:8080/api/v1/auth/login", params, options);
  }

  loadProfile(data: any) {
    console.log("Data from server:", data);
    console.log("Log 1 as:", data['access-token']);
    this.isAuthenticated = true;
    this.accessToken = data['access-token'];
    localStorage.setItem('accessToken', this.accessToken);

    let decodedJwt: any = jwtDecode(this.accessToken);
    console.log("Log 2 as:",decodedJwt);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = "";
    this.username = undefined;
    this.roles = undefined;
  }

}
