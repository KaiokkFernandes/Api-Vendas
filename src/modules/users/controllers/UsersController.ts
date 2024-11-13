import { Request, Response } from "express";
import ListUsersServices from "../services/listUserService";

export default class UsersController {
   public async create(request: Request, response: Response): Promise<Response>{
    const ListUsers = new ListUsersServices();

    const users = await ListUsers.execute();

    return response.json(users);
   }
}
