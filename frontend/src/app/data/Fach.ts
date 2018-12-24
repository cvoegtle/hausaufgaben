import { FachEnum } from "./FachEnum";

export class Fach {
  key: FachEnum;
  description: string;
}

export function createFachArray(): Array<Fach> {
  return [
    {key: FachEnum.DEUTSCH, description: "Deutsch"},
    {key: FachEnum.ENGLISCH, description: "Englisch"},
    {key: FachEnum.MATHEMATIK, description: "Mathe"}
  ];
}