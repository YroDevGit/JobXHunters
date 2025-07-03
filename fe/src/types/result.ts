export type Result<T> = 
  | { data: T }           // success case
  | { error: string };    // error case
