import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hausaufgabe } from "../data/Hausaufgabe";
import { translate } from "../data/Fach";

@Component({
  selector: 'homework-view',
  templateUrl: './homework-view.component.html',
  styleUrls: ['./homework-view.component.css']
})
export class HomeworkViewComponent implements OnInit {

  @Input() hausaufgabe: Hausaufgabe;
  @Input() deleteAllowed: boolean;
  @Output() delete: EventEmitter<Hausaufgabe> = new EventEmitter<Hausaufgabe>();

  constructor() { }

  getDate() {
    let date = new Date(this.hausaufgabe.datum);
    return new Intl.DateTimeFormat('de-DE').format(date);
  }

  ngOnInit() {
  }

  deleteClicked() {
    this.delete.emit(this.hausaufgabe);
  }

  getFach() {
    let currentFach =  translate(this.hausaufgabe.fach);
    return currentFach.description;
  }
}
