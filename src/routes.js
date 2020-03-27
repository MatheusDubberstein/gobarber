import { Router } from 'express';
import multer from 'multer';

import FileController from './app/controllers/FileController';
import SessionsControler from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import multerConfig from './config/multer';
import authMiddleware from './middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsControler.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
