import { Identifiable } from "./Identifiable";

export interface StorageService<T extends Identifiable<T>> {
  saveOne(entity: T): Promise<T>;

  delete(id: T["id"]): Promise<void>;
  deleteAll(): Promise<void>;

  getOne(id: T["id"]): Promise<T>;
  getAll(): Promise<T[]>;
}
