export interface FaunaResponse<T> {
  ref: any;
  ts: number;
  data: T
}

export interface FaunaCollectionResponse<T> {
  data: T
}
