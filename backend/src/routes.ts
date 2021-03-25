import { Router, Request, Response } from 'express';
import DonationController from './app/controllers/DonationController';
import ListController from './app/controllers/ListController';
import PaperStoreController from './app/controllers/PaperStoreController';
import ParentController from './app/controllers/ParentController';
import ProductsListController from './app/controllers/ProductsListController';
import SchoolController from './app/controllers/SchoolController';
import StudentController from './app/controllers/StudentController';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Ok');
});

routes.get('/school', SchoolController.index);
routes.get('/paperStore', PaperStoreController.index);

routes.post('/parent', ParentController.store);

routes.post('/student', StudentController.store);
routes.post('/list', ListController.store);
routes.get('/list', ListController.index);
routes.get('/list/:id', ListController.find);

routes.post('/productsList', ProductsListController.store);
routes.post('/donate', DonationController.donation);
routes.post('/donationConfirmation', DonationController.confirmTransaction);

export default routes;
