export interface CRUDRepository<E, I, R> {
  findByEmail?(email: I): Promise<R | null>;
  create(item: E): Promise<R>;
}
