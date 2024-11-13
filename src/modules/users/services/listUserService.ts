import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Users from "../typeorm/entities/Users";
import { create } from "domain";
import UserRepository from "../typeorm/repositories/UserRepository";


class ListUsersServices {
   public async execute(): Promise<Users[]>{
   const usersRepository = getCustomRepository(UserRepository);

   const users = await usersRepository.find();

   return users;

  }
}
export default ListUsersServices;
