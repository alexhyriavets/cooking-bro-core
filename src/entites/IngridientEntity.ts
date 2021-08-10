import { Identifiable } from "../interfaces/Identifiable";

export class IngridientEntity implements Identifiable<IngridientEntity> {
  public id: number = -1;
  public name: string = "";

  equals(entity: IngridientEntity): boolean {
    return entity.id === this.id;
  }
}
