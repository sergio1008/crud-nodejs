import { Inject, Service } from "typedi";
import { UserServiceImpl } from "../../../domain/service/impl/user-impl.service";
import { CreateUserUseCase } from "../create-user.usecase";
import { User } from "../../../domain/model/user.model";

@Service()
export class CreateUserUseCaseImpl implements CreateUserUseCase {
    constructor(@Inject() private userService: UserServiceImpl) {}

    execute(user: User): Promise<User> {
        return this.userService.save(user);
    }
}