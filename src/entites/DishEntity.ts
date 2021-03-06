import { Identifiable } from "../interfaces/Identifiable";
import { CountableIngridientEntity } from "./CountableIngridientEntity";

export class DishEntity implements Identifiable<DishEntity> {
  constructor(
    public id: number,
    public name: string,
    public ingridients: CountableIngridientEntity[]
  ) {}

  equals(entity: DishEntity): boolean {
    return entity.id === this.id;
  }
}
