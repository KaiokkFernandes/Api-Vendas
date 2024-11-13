import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Users from "../typeorm/entities/Users";
import { create } from "domain";
import UserRepository from "../typeorm/repositories/UserRepository";

interface IRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
   public async execute({name, email, password}: IRequest): Promise<Users>{
     const usersRepository = getCustomRepository(UserRepository);

     const emailExists = await usersRepository.findByName(email);
     if(emailExists){
      throw new AppError('Email address already used.');
     }

     const user = usersRepository.create({
          name,
          email,
          password,
      });

      await usersRepository.save(user);

      return user;
   }

}


export default create
