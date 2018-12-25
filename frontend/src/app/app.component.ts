import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from "./service/configuration.service";
import { Hausaufgabe } from "./data/Hausaufgabe";
import { HomeworkService } from "./service/homework.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hausaufgaben: Hausaufgabe[];

  constructor(private configurationService: ConfigurationService, private homeworkService: HomeworkService) {
  }

  ngOnInit(): void {
    if (this.configurationService.isInitialised()) {
      this.fetchHomework();
    } else {
      this.configurationService.load().subscribe(_ => this.fetchHomework());
    }

  }

  fetchHomework() {

    this.homeworkService.fetchHausaufgaben().subscribe(fetchedHausaufgaben => this.hausaufgaben = fetchedHausaufgaben);
  }
}
