import { Identifiable } from "../interfaces/Identifiable";
import { IngridientEntity } from "./IngridientEntity";

export class DishEntity implements Identifiable<DishEntity> {
  public id: number = -1;
  public name: string = "";
  public ingridients: IngridientEntity[] = [];

  equals(entity: DishEntity): boolean {
    return entity.id === this.id;
  }
}
