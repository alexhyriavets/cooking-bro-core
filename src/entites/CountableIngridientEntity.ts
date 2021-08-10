import { Unit } from "../enums/Unit";
import { IngridientEntity } from "./IngridientEntity";

export class CountableIngridientEntity {
  constructor(
    public ingridient: IngridientEntity,
    public quantity: number,
    public unit: Unit
  ) {}

  equals(entity: CountableIngridientEntity): boolean {
    return this.ingridient.id === entity.ingridient.id;
  }

  public canMerge(entity: CountableIngridientEntity): boolean {
    return this.equals(entity) && this.unit === entity.unit;
  }

  public merge(entity: CountableIngridientEntity): CountableIngridientEntity {
    if (!this.canMerge(entity)) {
      throw new Error("Can not merge ingridients with different ids or units");
    }

    return new CountableIngridientEntity(
      this.ingridient,
      this.quantity + entity.quantity,
      this.unit
    );
  }
}
