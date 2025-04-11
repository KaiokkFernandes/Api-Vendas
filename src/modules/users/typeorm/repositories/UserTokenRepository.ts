import { EntityRepository, Repository } from "typeorm";
import UserToken from "../entities/Users";

@EntityRepository(UserToken)
class UserTokenRepository extends Repository<UserToken>{
    public async findByToken(name:string): Promise<UserToken | undefined>{
      const user = await this.findOne({
        where: {
          name
        },
      });
      return user;
    }

    public async findById(id:string): Promise<UserToken | undefined>{
      const user = await this.findOne({
        where: {
          id
        },
      });
      return user;
    }

    public async findByEmail(email:string): Promise<UserToken | undefined>{
      const user = await this.findOne({
        where: {
          email
        },
      });
      return user;
    }
}


export default UserTokenRepository;
