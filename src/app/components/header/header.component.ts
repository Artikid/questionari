import { Component, OnInit, Input, Output } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { UserLogin } from "../../interfaces/user-login";

//interface userActive {
//username: UserLogin["username"];
//}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "";
  //user: userActive = { username: this._user.username };

  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
