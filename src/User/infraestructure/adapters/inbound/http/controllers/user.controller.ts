import { Request, Response } from "express";
import { BaseController } from "../../../../../../commons/ports/outbound/http/base-crud.controller";
import { Inject, Service } from "typedi";
import { CreateUserUseCaseImpl } from "../../../../../application/use-cases/impl/create-user-impl.usecase";
import { FindAllUsersUseCaseImpl } from "../../../../../application/use-cases/impl/find-all-users-impl.usecase";
import { FindByIdUserUseCaseImpl } from "../../../../../application/use-cases/impl/find-by-id-user-impl.usecase";
import { UpdateUserUseCaseImpl } from "../../../../../application/use-cases/impl/update-user-impl.usecase";
import { DeleteUserUseCaseImpl } from "../../../../../application/use-cases/impl/delete-user-impl.usecase";

@Service()
export class UserController implements BaseController {

    constructor(
        @Inject() private createUserUseCase: CreateUserUseCaseImpl,
        @Inject() private findAllUsersUseCase: FindAllUsersUseCaseImpl,
        @Inject() private findByIdUserUseCase: FindByIdUserUseCaseImpl,
        @Inject() private updateUserUseCase: UpdateUserUseCaseImpl,
        @Inject() private deleteUserUseCase: DeleteUserUseCaseImpl,
    ) {

    }

    save(req: Request, res: Response): void {
        const { id, name, email, password } = req.body
        this.createUserUseCase.execute({ id, name, email, password })
            .then((user) => {
                res.send(user)
            }).catch((error: Error) => {
                res.status(500).send(error.message);
            });
    }

    findAll(req: Request, res: Response): void {
        this.findAllUsersUseCase.execute().then((users) => {
            res.send(users)
        });
    }

    findById(req: Request, res: Response): void {

        const { userId } = req.params;

        this.findByIdUserUseCase.execute(Number(userId))
            .then((user) => {
                res.send(user)
            }).catch((error: Error) => {
                res.status(404).send(error.message);
            });

    }

    update(req: Request, res: Response): void {
        const { userId } = req.params;
        const { id, name, email, password } = req.body;

        this.updateUserUseCase.execute({ id: Number(userId), user: { id, name, email, password } })
            .then((user) => {
                res.send(user)
            }).catch((error: Error) => {
                res.status(500).send(error.message);
            });
    }

    delete(req: Request, res: Response): void {
        const { userId } = req.params;
        this.deleteUserUseCase.execute(Number(userId))
            .then(() => {
                res.send('User deleted')
            }).catch((error: Error) => {
                res.status(500).send(error.message);
            });
    }


}