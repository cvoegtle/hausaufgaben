import { Component, OnInit } from '@angular/core';
import { createFachArray, Fach } from "../data/Fach";
import { Hausaufgabe } from "../data/Hausaufgabe";
import { FachEnum } from "../data/FachEnum";
import { HomeworkService } from "../service/homework.service";

@Component({
  selector: 'homework-input',
  templateUrl: './homework-input.component.html',
  styleUrls: ['./homework-input.component.css']
})
export class HomeworkInputComponent implements OnInit {
  faecher: Array<Fach> = createFachArray();
  aufgabe: Hausaufgabe = {
    id: null,
    fach: FachEnum.DEUTSCH,
    aufgabe: "",
    datum: null
  };

  constructor(private homeworkService: HomeworkService) {
  }

  ngOnInit() {
  }

  isCreatePossible(): boolean {
    let text = this.aufgabe.aufgabe;
    return text != null && text.length > 0;
  }

  createHomework() {
    this.homeworkService.createHausaufgabe(this.aufgabe).subscribe(created => {
      if (created) {
        this.aufgabe.aufgabe = "";
      }
    })
  }
}
