import { Identifiable } from "../interfaces/Identifiable";
import { CountableIngridientEntity } from "./CountableIngridientEntity";

export class CartEntity implements Identifiable<CartEntity> {
  constructor(
    public id: number,
    public createdAt: Date,
    public items: CountableIngridientEntity[]
  ) {}

  equals(entity: CartEntity): boolean {
    return entity.id === this.id;
  }
}
