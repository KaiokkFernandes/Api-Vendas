import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Users from "../typeorm/entities/Users";
import UserRepository from "../typeorm/repositories/UserRepository";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IRequest{
  email: string;
  password: string;
}
interface IResponse {
  user: Users;
  token: string;
}


class AuthenticationUserService {
  public async execute({ email, password, }: IRequest): Promise<IResponse>{
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findByEmail(email);
    if(!user){
     throw new AppError('Incorrect email/password combination.', 401);
    }

   const matchPassword = await compare(password, user.password);

   if(!matchPassword){
    throw new AppError("Incorret password, please try again.", 401);
   }

   const token = sign({}, 'f296f1', {
    subject: user.id,
    expiresIn: '1d'
   })
     return {
        user,
        token
     };
  }

}

export default  AuthenticationUserService;
