import { Identifiable } from "../interfaces/Identifiable";
import { StorageService } from "../interfaces/StorageService";

export class InMemoryStorage<T extends Identifiable<T>>
  implements StorageService<T>
{
  // @ts-ignore
  private state: Record<T["id"], T> = {};

  async saveOne(entity: T): Promise<void> {
    this.state = {
      ...this.state,
      [entity.id]: entity,
    };
  }

  async delete(id: T["id"]): Promise<void> {
    delete this.state[id];
  }

  async deleteAll(): Promise<void> {
    // @ts-ignore
    this.state = {};
  }

  async getOne(id: T["id"]): Promise<T> {
    return this.state[id];
  }

  async getAll(): Promise<T[]> {
    return Object.values(this.state);
  }
}
