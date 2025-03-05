import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Users from "../typeorm/entities/Users";
import UserRepository from "../typeorm/repositories/UserRepository";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import auth from "@config/auth";


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


   // cria o token JWT assim que o usuario cria uma sessão
   const token = sign(
     {},
     auth.jwt.secret,  // se secret é 'f5b4', deixe como string mesmo
     {
       subject: String(user.id),  // ou user.id.toString() se user.id não for string
       expiresIn: auth.jwt.expiresIn, // '1d'
     }
   );

     return {
        user,
        token
     };
  }

}

export default  AuthenticationUserService;
