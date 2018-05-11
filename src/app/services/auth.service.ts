import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserLogin } from "../interfaces/user-login";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import { catchError, map } from "rxjs/operators";
import { Router } from "@angular/router";

interface LoginToken {
  accessToken: string;
}

const ACCESS_TOKEN: string = "ACCESS_TOKEN";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public http: HttpClient, public router: Router) {}

  getBaseUrl() {
    return environment.apiBaseUrl;
  }

  login(user: UserLogin): Observable<boolean> {
    const obs = this.http.post<LoginToken>(this.getBaseUrl() + "login", user);

    return obs
      .pipe(
        map(response => {
          console.log("TUTTO OK");
          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
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
