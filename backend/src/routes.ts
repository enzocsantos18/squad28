import { Router, Request, Response } from 'express';
import ParentController from './app/controllers/ParentController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Ok');
});

routes.post('/parent', ParentController.store);

export default routes;
