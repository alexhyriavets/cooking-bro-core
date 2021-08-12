import { CartEntity } from "../entites/CartEntity";
import { Repository } from "../interfaces/Repository";
import { StorageService } from "../interfaces/StorageService";

export class CartRepository implements Repository<CartEntity> {
  constructor(private storage: StorageService<CartEntity>) {}

  saveOne(entity: CartEntity): Promise<void> {
    return this.storage.saveOne(entity);
  }

  getOne(id: CartEntity["id"]): Promise<CartEntity> {
    return this.storage.getOne(id);
  }

  getAll(): Promise<CartEntity[]> {
    return this.storage.getAll();
  }
}
