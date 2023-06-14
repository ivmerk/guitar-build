export interface CRUDRepository<E, I, R> {
  findByEmail?(email: I): Promise<R | null>;
  create(item: E): Promise<R>;
  update?(id: I, item: E): Promise<R>;
  destroy?(id: I): Promise<void>;
  findById?(id: I): Promise<R | null>;
}
