export interface IBaseService<C, U, R> {
    findAll(): Promise<R[]>;
    create(createDto: C): Promise<R>;
    findOne(id: string): Promise<R>;
    update(id: string, updateDto: U): Promise<R>;
    delete(id: string): Promise<void>;
}
