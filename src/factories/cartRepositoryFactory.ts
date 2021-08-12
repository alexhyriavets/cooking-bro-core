import { CartEntity } from "../entites/CartEntity";
import { CartRepository } from "../repositories/CartRepository";
import { InMemoryStorage } from "../services/InMemoryStorage";

let instance: CartRepository | null = null;

export function getCartRepository(): CartRepository {
  if (instance) {
    return instance;
  }

  const cartInMemoryStorage = new InMemoryStorage<CartEntity>();

  const newIstance = new CartRepository(cartInMemoryStorage);

  instance = newIstance;

  return instance;
}
