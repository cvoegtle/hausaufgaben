import { FachEnum } from "./FachEnum";

export class Fach {
  key: FachEnum;
  description: string;
}

export function createFachArray(): Array<Fach> {
  return [
    {key: FachEnum.Deutsch, description: "Deutsch"},
    {key: FachEnum.Englisch, description: "Englisch"},
    {key: FachEnum.Mathematik, description: "Mathe"}
  ];
}