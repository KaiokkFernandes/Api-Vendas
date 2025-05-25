import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import { create } from "domain";
import Customer from "../typeorm/entities/Customers";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";


class ListUsersServices {
   public async execute(): Promise<Customer[]>{
   const usersRepository = getCustomRepository(CustomerRepository);

   const customers = await usersRepository.find();

   return  customers;

  }
}
export default ListUsersServices;
