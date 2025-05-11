import { Router } from 'express';
import asyncHandler from '@config/Middleware';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordController from '../controllers/FotgotPasswordController';
import isAuthenticated from '../middlewares/isAuthenticated';



const sessionsRouter = Router();
const forgotPasswordController = new ForgotPasswordController();


// http://localhost:3333/password/forgot

// rota para criar uma sessão
sessionsRouter.post('/forgot',
celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
  },
}),
isAuthenticated,
asyncHandler(forgotPasswordController.create));


export default sessionsRouter;
