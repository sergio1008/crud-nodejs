import { BaseCrudService } from "../../../commons/service/user.service";
import { User } from "../model/user.model";

export interface IUserService extends BaseCrudService<User, number> {  

}