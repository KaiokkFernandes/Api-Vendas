import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import asyncHandler from '@config/Middleware';
import { celebrate, Joi, Segments } from 'celebrate';
const UsersRouter = Router();
const usersController = new UsersController();


// Rota para listar todos os usuários
UsersRouter.get('/', asyncHandler(usersController.index));

// Rota para criar usuarios
UsersRouter.post('/',
  celebrate({
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }),
  asyncHandler(usersController.create));

export default UsersRouter;
