import { Component, Input, OnInit } from '@angular/core';
import { Hausaufgabe } from "../data/Hausaufgabe";

@Component({
  selector: 'homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {
  @Input() hausaufgaben: Hausaufgabe[]

  constructor() { }

  ngOnInit() {
  }

}
