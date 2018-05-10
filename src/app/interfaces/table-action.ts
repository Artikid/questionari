export interface TableAction<T> {
  icon: string;
  callback: (item: T) => void;
}
