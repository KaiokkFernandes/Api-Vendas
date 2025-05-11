import productRouter from '@modules/product/routes/products.routes';
import passwordRoutes from '@modules/users/routes/password.routes';
import sessionsRouter from '@modules/users/routes/session.routes';
import UsersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', UsersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRoutes);


export default routes;
