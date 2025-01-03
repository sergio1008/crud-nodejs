import { CrudRepository } from "../../../../commons/ports/outbound/db/base.repository";
import { User } from "../../model/user.model";

export interface IUserRepository extends CrudRepository<User, number> {}