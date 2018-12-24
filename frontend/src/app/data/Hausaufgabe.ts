import { FachEnum } from "./FachEnum";

export class Hausaufgabe {
  id: number;
  fach: FachEnum;
  aufgabe: string;
  datum: Date;
}