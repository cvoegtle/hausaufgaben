import { Component, OnInit } from '@angular/core';
import { Hausaufgabe } from "../data/Hausaufgabe";
import { ConfigurationService } from "../service/configuration.service";
import { HomeworkService } from "../service/homework.service";
import { UserService, UserStatus } from "../service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {
  hausaufgaben: Hausaufgabe[];
  userStatus: UserStatus;

  constructor(private configurationService: ConfigurationService,
              private homeworkService: HomeworkService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.configurationService.isInitialised()) {
      this.fetchAll();
    } else {
      this.configurationService.load().subscribe(_ => this.fetchAll());
    }

  }

  fetchAll() {
    this.fetchUserStatus();
    this.fetchHomework();
  }

  fetchUserStatus() {
    this.userService.fetchStatus().subscribe(fetchStatus => this.processUserStatus(fetchStatus));
  }

  private processUserStatus(fetchStatus: UserStatus) {
    this.userStatus = fetchStatus;
    if (!this.userStatus.loggedIn) {
      this.router.navigate(['/']);
    }
  }

  fetchHomework() {
    this.homeworkService.fetchHausaufgaben().subscribe(fetchedHausaufgaben => this.hausaufgaben = fetchedHausaufgaben);
  }

  deleteClicked(hausaufgabe: Hausaufgabe) {
    this.homeworkService.deleteHausaufgabe(hausaufgabe.id).subscribe(_ => this.fetchHomework());
  }

  isAuthorised() {
    return this.userStatus.authorised;
  }
}
