import { Router } from 'express';
import ProductController from '../controller/ProductController';
import asyncHandler from '@config/Middleware';

const productRouter = Router();
const productsController = new ProductController();

productRouter.get('/', asyncHandler(productsController.index.bind(productsController)));
productRouter.get('/:id', asyncHandler(productsController.show.bind(productsController)));
productRouter.post('/', asyncHandler(productsController.create.bind(productsController)));
productRouter.put('/:id', asyncHandler(productsController.update.bind(productsController)));
productRouter.delete('/:id', asyncHandler(productsController.delete.bind(productsController)));

export default productRouter;
