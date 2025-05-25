import { Router } from 'express';
import asyncHandler from '@config/Middleware';
import {celebrate, Joi, Segments} from 'celebrate'
import CustomerController from '../controllers/CustomersControllers';
import isAuthenticated from '@modules/users/middlewares/isAuthenticated';

const CustomerRouter = Router();
const customerController = new CustomerController();

CustomerRouter.use(isAuthenticated);

CustomerRouter.get('/', asyncHandler(customerController.index.bind(CustomerController)));

CustomerRouter.get('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
 asyncHandler(customerController.show.bind(CustomerController)));

CustomerRouter.post('/',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }
})),
asyncHandler(customerController.create.bind((CustomerController)));

CustomerRouter.put('/:id',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}),
asyncHandler(customerController.update.bind(CustomerController)));

CustomerRouter.delete('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}),
asyncHandler(customerController.delete.bind(CustomerController)));

export default CustomerRouter;
