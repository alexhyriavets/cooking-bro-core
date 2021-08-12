import { CartEntity } from "../entites/CartEntity";
import { CartRepository } from "../repositories/CartRepository";
import { InMemoryStorage } from "../services/InMemoryStorage";

export function createCartRepository(): CartRepository {
  const cartInMemoryStorage = new InMemoryStorage<CartEntity>();

  return new CartRepository(cartInMemoryStorage);
}
