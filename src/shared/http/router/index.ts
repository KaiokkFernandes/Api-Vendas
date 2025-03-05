import productRouter from '@modules/product/routes/products.routes';
import sessionsRouter from '@modules/users/routes/session.routes';
import UsersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', sessionsRouter);


export default routes;
