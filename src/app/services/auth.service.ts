import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserLogin } from "../interfaces/user-login";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import { catchError, map } from "rxjs/operators";

interface LoginToken {
  accessToken: string;
}

const ACCESS_TOKEN: string = "ACCESS_TOKEN";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public http: HttpClient) {}

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
}
