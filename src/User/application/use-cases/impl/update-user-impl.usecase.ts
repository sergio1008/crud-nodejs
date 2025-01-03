import { Inject, Service } from "typedi";
import { User } from "../../../domain/model/user.model";
import { UpdateUserUseCase } from "../update-user.usecase";
import { UserServiceImpl } from "../../../domain/service/impl/user-impl.service";

@Service()
export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
    constructor(@Inject() private userService: UserServiceImpl) { }

    async execute(input: { id: number; user: User; }): Promise<User> {
        return await this.userService.update(input.id, input.user);
    }

}