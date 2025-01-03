import { Inject, Service } from "typedi";
import { UserServiceImpl } from "../../../domain/service/impl/user-impl.service";
import { FindByIdUserUseCase } from "../find-by-id-user.usercase";
import { User } from "../../../domain/model/user.model";

@Service()
export class FindByIdUserUseCaseImpl implements FindByIdUserUseCase {
    constructor(@Inject() private userService: UserServiceImpl ) { }

    async execute(id: number): Promise<User> {
        const user = await this.userService.findById(id);
        if(!user) {
            throw new Error('User not found');
        }
        return user;
        
    }
}