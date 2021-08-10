import { Identifiable } from "../interfaces/Identifiable";

export class IngridientEntity implements Identifiable<IngridientEntity> {
  constructor(public id: number, public name: string) {}

  equals(entity: IngridientEntity): boolean {
    return entity.id === this.id;
  }
}
