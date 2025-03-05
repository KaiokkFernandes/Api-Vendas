import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Users from "../typeorm/entities/Users";
import UserRepository from "../typeorm/repositories/UserRepository";
import { hash } from "bcryptjs";

interface IRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
   public async execute({name, email, password}: IRequest): Promise<Users>{
     const usersRepository = getCustomRepository(UserRepository);

     const emailExists = await usersRepository.findByEmail(email);
     if(emailExists){
      throw new AppError('Email address already used.');
     }

     const hashPassword = await hash(password, 8);

     const user = usersRepository.create({
          name,
          email,
          password: hashPassword,
      });

      await usersRepository.save(user);

      return user;
   }

}


export default CreateUserService;
