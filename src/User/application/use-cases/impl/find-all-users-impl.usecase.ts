import { Service } from "typedi";
import { User } from "../../../domain/model/user.model";
import { UserServiceImpl } from "../../../domain/service/impl/user-impl.service";
import { FindAllUsersUseCase } from "../find-all-users.usecase";

@Service()
export class FindAllUsersUseCaseImpl implements FindAllUsersUseCase {
    constructor(private readonly userService: UserServiceImpl) { }

    async execute(): Promise<User[]> {
        return this.userService.findAll();
    }
}