import { Router } from 'express';
import DonationController from './app/controllers/DonationController';
import ListController from './app/controllers/ListController';
import PaperStoreController from './app/controllers/PaperStoreController';
import ParentController from './app/controllers/ParentController';
import ProductController from './app/controllers/ProductController';
import ProductsListController from './app/controllers/ProductsListController';
import SchoolController from './app/controllers/SchoolController';
import StudentController from './app/controllers/StudentController';

const routes = Router();

// Área pai
routes.post('/parent', ParentController.store); // Criar pai
routes.post('/student', StudentController.store); // Criar filho
routes.get('/student/parent/:id', StudentController.findByParent); // Achar filho por pai
routes.post('/list', ListController.store); // Criar lista
routes.get('/list/student/:id', ListController.findByStudent); // Lista por estudante
routes.get('/school', SchoolController.index); // Listagem de escolas

routes.post('/donationConfirmation', DonationController.confirmTransaction); // Confirmar doação

routes.get('/list', ListController.index); // Listar listas
routes.get('/list/:id', ListController.find); // Listar itens de uma lista especifica

routes.get('/paperStore', PaperStoreController.index); // Listagem de papelarias
routes.get('/products/paperStore/:id', ProductController.findByPaperStore); // Listagem de produtos de determinada papelaria
routes.post('/productsList', ProductsListController.store); // Adicionar produto na lista

// Doador
routes.post('/donate', DonationController.donation); // Realizar doação

export default routes;
