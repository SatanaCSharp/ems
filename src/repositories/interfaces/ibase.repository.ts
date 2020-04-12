export interface IBaseRepository<C, U, R> {
    findAll(): Promise<R[]>;
    findById(id: string): Promise<R>;
    create(createDto: C): Promise<R>;
    update(id: string, updateDto: U): Promise<R>;
    delete(id: string): Promise<void>;
}
