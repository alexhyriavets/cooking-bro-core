export interface Storage<T> {
  getItem(key: string): T | undefined;
  setItem(key: string, item: T | T[]): Promise<void>;
  removeItem(key: string): Promise<void>;
}
