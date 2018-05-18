import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserLogin } from "../interfaces/user-login";
import { Observable, of, merge } from "rxjs";
import { environment } from "../../environments/environment";
import { catchError, map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Headers, RequestOptions } from "@angular/http";

interface LoginToken {
  access_token: string;
  functionalities: string;
  refresh_token: string;
  //expires_in: number;
}

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
};

const ACCESS_TOKEN: string = "ACCESS_TOKEN";
const FUNCTIONALITIES: string = "FUNCTIONALITIES";
const REFRESH_TOKEN: string = "REFRESH_TOKEN";
//const EXPIRES_IN: string = "EXPIRES_IN";

interface FUNC {
  FUN_PK?: number;
  FUN_NAME?: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public http: HttpClient, public router: Router) {}

  func: FUNC[] = [];

  getBody = (user: UserLogin) => {
    if (!this.isLoggedIn()) {
      return `username=${user.username}&password=${user.password}&grant_type=password`;
    } else {
      return `username=${user.username}&refresh_token=${this.getRefreshToken()}&grant_type=refresh_token`;
    }
  };

  getBaseUrl() {
    return environment.apiBaseUrl;
  }
  getTokenBaseUrl() {
    return environment.tokenBaseUrl;
  }

  getFunc() {
    return this.http.get<FUNC[]>(this.getBaseUrl() + "users/me/functionalities", httpOptions).subscribe(response => {
      response = this.func;
    });
  }

  login(user: UserLogin): Observable<boolean> {
    const obs = this.http.post<LoginToken>(this.getTokenBaseUrl(), this.getBody(user), httpOptions);

    console.log(obs);
    return obs
      .pipe(
        map(response => {
          console.log("TUTTO OK");
          localStorage.setItem(ACCESS_TOKEN, response.access_token);
          localStorage.setItem(FUNCTIONALITIES, response.functionalities);
          localStorage.setItem(REFRESH_TOKEN, response.refresh_token);
          //localStorage.setItem(EXPIRES_IN, response.expires_in.toString());
          this.getFunc();
          return true;
        })
      )
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return of(false);
        })
      );

    
  }

  getAccessToken(): string {
    //const token: LoginToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN) || "");
    const token = localStorage.getItem(ACCESS_TOKEN);
    return `bearer ${token}`;
  }

  getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.router.navigate(["/login"]);
  }

  isLoggedIn(): boolean {
    {
      return !!localStorage.getItem(ACCESS_TOKEN);
    }
  }
}
