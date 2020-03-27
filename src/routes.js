import { Router } from 'express';

import SessionsControler from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsControler.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
