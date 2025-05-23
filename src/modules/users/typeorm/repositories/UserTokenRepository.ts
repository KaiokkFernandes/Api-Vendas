import { EntityRepository, Repository } from "typeorm";
import UserToken from "../entities/UserToken";

@EntityRepository(UserToken)
class UserTokenRepository extends Repository<UserToken>{
    public async findByToken(token:string): Promise<UserToken | undefined>{
      const userToken = await this.findOne({
        where: {
          token,
        },
      });
      return userToken;
    }

    public async generate(user_id:string): Promise<UserToken>{
      const userToken = this.create({
        user_id,
      });

      await this.save(userToken);

      return userToken;
    }
}


export default UserTokenRepository;
