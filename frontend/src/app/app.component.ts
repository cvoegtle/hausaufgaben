import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from "./service/configuration.service";
import { UserService, UserStatus } from "./service/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { handleError } from "./service/helper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userStatus: UserStatus;

  constructor(private configurationService: ConfigurationService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.configurationService.isInitialised()) {
      this.fetchStatus();
    } else {
      this.configurationService.load().subscribe(_ => this.fetchStatus());
    }
  }

  private fetchStatus() {
    return this.userService.fetchStatus().subscribe(status => this.processStatus(status),
        _ => handleError<void>('fetchStatus'));
  }

  private processStatus(status: UserStatus) {
    this.userStatus = status;
    if (status.loggedIn) {
      this.router.navigate(['edit']);
    }
  }

  logoutClicked(): void {
    this.userService.clearStatus();
    let logoutUrl = this.userStatus.url;
    window.location.href = logoutUrl;
  }

  isLoggedIn(): boolean {
    return this.userStatus != null && this.userStatus.loggedIn;
  }

}
