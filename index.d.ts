export interface INotion<T> {
  name: T,
  id?: number,
  toString(): string,
}

export interface ITriple {
  id: number,
  subject: INotion<string>,
  predicate: INotion<string>,
  object: INotion<string>,
}