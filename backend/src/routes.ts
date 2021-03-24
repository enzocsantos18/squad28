import { Router, Request, Response } from 'express';
import ListController from './app/controllers/ListController';
import ParentController from './app/controllers/ParentController';
import StudentController from './app/controllers/StudentController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Ok');
});

routes.post('/parent', ParentController.store);
routes.post('/student', StudentController.store);
routes.post('/list', ListController.store);

export default routes;
