import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Users from "../typeorm/entities/Users";
import UserRepository from "../typeorm/repositories/UserRepository";

interface IRequest {
  user_id: string;
}

class ShowProfileServices {
   public async execute({user_id}: IRequest): Promise<Users>{
   const usersRepository = getCustomRepository(UserRepository);

   const users = await usersRepository.findById(user_id);

   if(!users) {
    throw new AppError('User not found');
   }
   return users;

  }
}
export default ShowProfileServices;
