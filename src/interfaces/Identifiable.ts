export interface Identifiable<T> {
  id: number;

  equals(entity: T): boolean;
}
