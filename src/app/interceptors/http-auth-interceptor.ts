import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";

const handleError = (err: any, caught: Observable<any>) => {
  return caught;
};

@Injectable({
  providedIn: "root"
})
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService, public snackbar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (this.authService.isLoggedIn()) {
      //const userName = this.authService.
      const authValue = this.authService.getAccessToken();
      const headers = req.headers.append("Authorization", authValue);
      req = req.clone({ headers: headers });
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse, caught: Observable<any>) => {
        console.log(err);
        this.snackbar.open(`${err.status} ${err.statusText}`);
        return of(null);
      })
    );
  }
}
