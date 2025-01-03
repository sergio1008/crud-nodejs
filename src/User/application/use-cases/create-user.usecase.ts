import { BaseUseCase } from "../../../commons/usecases/base.usecase";
import { User } from "../../domain/model/user.model";

export interface CreateUserUseCase extends BaseUseCase<User, User> {}   