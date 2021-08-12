import { Identifiable } from "./Identifiable";

export interface Repository<T extends Identifiable<T>> {
  saveOne(entity: T): Promise<T>;

  getOne(id: T["id"]): Promise<T>;
  getAll(): Promise<T[]>;
}
