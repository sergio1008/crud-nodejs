import { Inject, Service } from "typedi";
import { User } from "../../model/user.model";
import { IUserService } from "../user.service";
import { UserRepositoryImpl } from "../../../infraestructure/adapters/outbound/db/repository/user-impl.repository";
import e = require("express");

@Service()
export class UserServiceImpl implements IUserService {

    constructor(@Inject() private userRepository: UserRepositoryImpl) {

    }

    save(t: User): Promise<User> {
        return this.userRepository.save(t)
    }

    findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findById(id: number): Promise<User> {

        if (isNaN(id)) {
            throw new Error('Id is required');
        }
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;

    }

    async update(id: number, t: User): Promise<User> {
        if (isNaN(id)) {
            throw new Error('Id is required');
        }

        const user = await this.userRepository.update(id, t);

        return user;
    }

    async delete(id: number): Promise<void> {
        
        if (isNaN(id)) {
            throw new Error('Id is required');
        }

        await this.userRepository.delete(id);

    }

}