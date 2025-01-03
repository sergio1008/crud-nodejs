import { BaseUseCase } from "../../../commons/usecases/base.usecase";
import { User } from "../../domain/model/user.model";

export interface FindByIdUserUseCase extends BaseUseCase<number, User> {}