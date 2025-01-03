export interface CrudRepository<T, ID> {
    save(t: T): Promise<T>
    findAll(): Promise<Array<T>>
    findById(id: ID): Promise<T>
    update(id: ID, t: T): Promise<T>
    delete(id: ID): Promise<void>
}