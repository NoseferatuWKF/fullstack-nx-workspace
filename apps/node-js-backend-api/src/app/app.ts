import * as express from 'express';
import { RoutesConfig } from './configs/routes.configs';
import * as routes from './routes';

export const appRouter = express.Router();

appRouter.get('/', (req, res) => {
  res.send({ message: 'Welcome to node-js-backend-api!' });
});

appRouter.use(RoutesConfig.todos, routes.todosRouter);
