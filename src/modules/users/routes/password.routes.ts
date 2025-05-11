import { Router } from 'express';
import asyncHandler from '@config/Middleware';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordController from '../controllers/FotgotPasswordController';
import isAuthenticated from '../middlewares/isAuthenticated';



const passwordRoutes = Router();
const forgotPasswordController = new ForgotPasswordController();


// http://localhost:3333/password/forgot

// rota para criar uma sessão
passwordRoutes.post('/forgot',
celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
}),
asyncHandler(forgotPasswordController.create));


passwordRoutes.post('/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  asyncHandler(forgotPasswordController.create));

export default passwordRoutes;
