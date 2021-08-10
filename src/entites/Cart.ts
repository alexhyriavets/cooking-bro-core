import { Identifiable } from "../interfaces/Identifiable";
import { CountableIngridientEntity } from "./CountableIngridientEntity";

export class Cart implements Identifiable<Cart> {
  constructor(
    public id: number,
    public createdAt: Date,
    public items: CountableIngridientEntity[]
  ) {}

  equals(entity: Cart): boolean {
    return entity.id === this.id;
  }
}
