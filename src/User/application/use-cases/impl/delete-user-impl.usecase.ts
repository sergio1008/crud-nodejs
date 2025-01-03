import { Inject, Service } from "typedi"
import { DeleteUserUseCase } from "../delete-user.usercase"
import { UserServiceImpl } from "../../../domain/service/impl/user-impl.service"

@Service()
export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
    constructor(@Inject() private userService: UserServiceImpl) { }
    
    async execute(input: number): Promise<void> {
        await this.userService.delete(input)
    }

}