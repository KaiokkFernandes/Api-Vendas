import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Users from "../typeorm/entities/Users";
import UserRepository from "../typeorm/repositories/UserRepository";
import { compare, hash } from "bcryptjs";


interface IRequest{
  email: string;
  password: string;
}


class AuthenticationUserService {
  public async execute({ email, password, }: IRequest): Promise<Users>{
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findByEmail(email);
    if(!user){
     throw new AppError('Incorrect email/password combination.', 401);
    }

   const matchPassword = await compare(password, user.password);

   if(!matchPassword){
    throw new AppError("Incorret password, please try again.", 401);
   }

     return user;
  }

}

export default  AuthenticationUserService;
