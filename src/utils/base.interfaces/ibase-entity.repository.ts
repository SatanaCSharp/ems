export interface IBaseEntityRepository<C, U, R>  {
    createAndSave(createDto: C): Promise<R>;
    updateOne(id: number, createDto: U): Promise<R>;
}
