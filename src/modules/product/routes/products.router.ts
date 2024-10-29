import { Router } from 'express';
import ProductController from '../controller/ProductController';
import asyncHandler from '@config/Middleware';
import {celebrate, Joi, Segments} from 'celebrate'

const productRouter = Router();
const productsController = new ProductController();

productRouter.get('/', asyncHandler(productsController.index.bind(productsController)));

productRouter.get('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
 asyncHandler(productsController.show.bind(productsController)));

productRouter.post('/',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required()
  }
}),
asyncHandler(productsController.create.bind(productsController)));

productRouter.put('/:id',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2).required(),
    quantity: Joi.number().required()
  },
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}),
asyncHandler(productsController.update.bind(productsController)));

productRouter.delete('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}),
asyncHandler(productsController.delete.bind(productsController)));

export default productRouter;
