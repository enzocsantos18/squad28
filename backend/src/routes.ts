import { Router, Request, Response } from 'express';
import ParentController from './app/controllers/ParentController';
import StudentController from './app/controllers/StudentController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Ok');
});

routes.post('/parent', ParentController.store);
routes.post('/student', StudentController.store);

export default routes;
