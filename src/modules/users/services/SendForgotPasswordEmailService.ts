import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import UserRepository from "../typeorm/repositories/UserRepository";
import UserTokenRepository from "../typeorm/repositories/UserTokenRepository";

interface IRequest{
    email: string;
}

class SendForgotPasswordEmailService{
   public async execute({ email}: IRequest): Promise<void>{
     const usersRepository = getCustomRepository(UserRepository);
     const userTokenRepository = getCustomRepository(UserTokenRepository);

     const user = await usersRepository.findByEmail(email);

     if(!user){
        throw new AppError('User does not exists');
     }


     const token =  await userTokenRepository.generate(user.id);
     console.log(token);
   }

}


export default SendForgotPasswordEmailService;
