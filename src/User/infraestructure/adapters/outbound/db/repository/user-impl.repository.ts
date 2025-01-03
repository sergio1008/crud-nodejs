import { Service } from "typedi";
import { User } from "../../../../../domain/model/user.model";
import { IUserRepository } from "../../../../../domain/ports/outbound/user.repository";
import UserEntity from "../entity/user.entity";

@Service()
export class UserRepositoryImpl implements IUserRepository {


    async save(user: User): Promise<User> {

        const { id, name, email, password } = user

        const result = await UserEntity.create({ id, name, email, password });

        if (!result) {
            throw new Error('Error saving user');
        }

        return {
            id: result.id,
            name: result.name,
            email: result.email,
            password: result.password
        }


    }

    async findAll(): Promise<User[]> {

        const data = await UserEntity.findAll();

        return data.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }
        });
    }

    async findById(id: number): Promise<User> {

        const user = await UserEntity.findByPk(id);

        if (!user) {
            throw new Error('User not found');
        }
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }

    }

    async update(id: number, userIn: User): Promise<User> {
        
        const user = await UserEntity.findByPk(id);

        if (!user) {
            throw new Error('User not found');
        }

        user.name = userIn.name;
        user.email = userIn.email;
        user.password = userIn.password;

        const userUpdated = await user.save();

        return {
            id: userUpdated.id,
            name: userUpdated.name,
            email: userUpdated.email,
            password: userUpdated.password
        }
    }

    async delete(id: number): Promise<void> {
        const user = await UserEntity.findByPk(id)
        
        if (!user) {
            throw new Error('User not found');
        }
        
        await user.destroy();

    }

}