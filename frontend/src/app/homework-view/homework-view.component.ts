import { Component, Input, OnInit } from '@angular/core';
import { Hausaufgabe } from "../data/Hausaufgabe";

@Component({
  selector: 'homework-view',
  templateUrl: './homework-view.component.html',
  styleUrls: ['./homework-view.component.css']
})
export class HomeworkViewComponent implements OnInit {

  @Input() hausaufgabe: Hausaufgabe;

  constructor() { }

  getDate() {
    let date = new Date(this.hausaufgabe.datum);
    return new Intl.DateTimeFormat('de-DE').format(date);
  }

  ngOnInit() {
  }

}
