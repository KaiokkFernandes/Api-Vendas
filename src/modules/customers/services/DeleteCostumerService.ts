import { getCustomRepository } from "typeorm";
import AppError from "@shared/erros/AppError";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";


interface IRequest {
  id: string;
}

class DeleteCostumerService {
  public async execute({id}: IRequest): Promise<void>{
    const costumerRepostory = getCustomRepository(CustomerRepository);

    const costumer = await costumerRepostory.findOne(id);

    if(!costumer){
      throw new AppError("Product not found");
    }

    await costumerRepostory.remove(costumer);
  }
}

export default DeleteCostumerService;
