import { BaseUseCase } from "../../../commons/usecases/base.usecase";
import { User } from "../../domain/model/user.model";

export interface UpdateUserUseCase extends BaseUseCase<{id: number, user: User}, User> {}