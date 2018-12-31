import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hausaufgabe } from "../data/Hausaufgabe";

@Component({
  selector: 'homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {
  @Input() hausaufgaben: Hausaufgabe[];
  @Input() deleteAllowed: boolean;
  @Output() delete: EventEmitter<Hausaufgabe> = new EventEmitter<Hausaufgabe>();

  constructor() { }

  ngOnInit() {
  }

  deleteClicked(hausaufgabe: Hausaufgabe) {
    this.delete.emit(hausaufgabe);
  }
}
