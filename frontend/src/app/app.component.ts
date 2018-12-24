import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from "./service/configuration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) {
  }

  ngOnInit(): void {
    if (this.configurationService.isInitialised()) {
      this.fetchHomework();
    } else {
      this.configurationService.load().subscribe(_ => this.fetchHomework());
    }

  }

  private fetchHomework() {

  }
}
