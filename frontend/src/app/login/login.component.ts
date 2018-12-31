import { Component, OnInit } from '@angular/core';
import { UserService, UserStatus } from "../service/user.service";
import { ConfigurationService } from "../service/configuration.service";
import { Router } from "@angular/router";
import { handleError } from "../service/helper";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userStatus: UserStatus;

  constructor(private configurationService: ConfigurationService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.configurationService.isInitialised()) {
      this.fetchStatus();
    } else {
      this.configurationService.load().subscribe(_ => this.fetchStatus());
    }
  }

  private fetchStatus() {
    this.userService.fetchStatus().subscribe(status => this.updateStatus(status),
        _ => handleError<void>('fetchStatus'));
  }

  loginClicked() {
    let url = this.userStatus.url;
    window.location.href = url;
  }

  updateStatus(status: UserStatus) {
    this.userStatus = status;
    if (status != null && status.loggedIn) {
      this.router.navigate(['/edit']);
    }
  }
}
