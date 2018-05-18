import { Component, OnInit } from "@angular/core";
import { UserLogin } from "../../interfaces/user-login";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-login",
  templateUrl: "./view-login.component.html",
  styleUrls: ["./view-login.component.scss"]
})
export class ViewLoginComponent implements OnInit {
  user: UserLogin = {};
  constructor(public authService: AuthService, public snackbar: MatSnackBar, public router: Router) {}

  ngOnInit() {}

  login(f: NgForm) {
    if (f.valid) {
      this.authService.login(this.user).subscribe(result => {
        console.log(result);
        if (result) {
          this.snackbar.open("Benvenuto!", "Grazie!", { duration: 4000 });
          this.router.navigate(["/"]);
        } else {
          this.snackbar.open("Username o Password non validi.", "Ok", {
            duration: 5000
          });
        }
      });
    }
  }
}
