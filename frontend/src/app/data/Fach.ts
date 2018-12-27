import { FachEnum } from "./FachEnum";

export class Fach {
  key: FachEnum;
  description: string;
}

export function createFachArray(): Array<Fach> {
  return [
    {key: FachEnum.Mathematik, description: "Mathe"},
    {key: FachEnum.Deutsch, description: "Deutsch"},
    {key: FachEnum.Englisch, description: "Englisch"},
    {key: FachEnum.Franzoesisch, description: "Französisch"},
    {key: FachEnum.Chemie, description: "Chemie"},
    {key: FachEnum.Physik, description: "Physik"},
    {key: FachEnum.Erdkunde, description: "Erdkunde"},
    {key: FachEnum.GW, description: "Gemeinschafts und Wirschaftskunde"},
    {key: FachEnum.Geschichte, description: "Geschichte"},
    {key: FachEnum.Musik, description: "Musik"},
    {key: FachEnum.Religion, description: "Kath. Religion"}
  ];
}