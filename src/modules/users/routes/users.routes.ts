import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import asyncHandler from '@config/Middleware';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../middlewares/isAuthenticated';
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
  isAuthenticated,
  asyncHandler(usersController.create));

export default UsersRouter;
