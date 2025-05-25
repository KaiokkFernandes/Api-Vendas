import AppError from "@shared/erros/AppError";
import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customers";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";

interface IRequest{
    name: string;
    email: string;
}

class CreateCustomerService {
   public async execute({name, email}: IRequest): Promise<Customer>{

     const usersRepository = getCustomRepository(CustomerRepository);

     const emailExists = await usersRepository.findByEmail(email);
     if(emailExists){
      throw new AppError('Email address already used.');
     }

     const customer = usersRepository.create({
          name,
          email,
      });

      await usersRepository.save(customer);

      return customer;
   }

}


export default CreateCustomerService;
