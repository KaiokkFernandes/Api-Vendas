import { Request, Response } from "express";
import ListUsersServices from "../services/listUserService";
import CreateUserService from "../services/CreateUserService";


export default class UsersController {
   public async index(request: Request, response: Response): Promise<Response>{
    const ListUsers = new ListUsersServices();

    const users = await ListUsers.execute();

    return response.json(users);
   }

    public async create(request: Request, response: Response): Promise<Response>{
     const {name, email, password} = request.body;

     const createUser = new CreateUserService();

     const user = await createUser.execute({
        name,
        email,
        password,
     });

     return response.json(user);
    }
}
