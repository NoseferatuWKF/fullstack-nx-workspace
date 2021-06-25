
import * as express from 'express';
import { Todo } from '../models/todos.models';

export const todosRouter = express.Router();

// middleware that is specific to this router
// todosRouter.use((req, res, next) => {
//   console.log('Request arriving');
//   next();
// })
// define the home page route
todosRouter.get('/', (req, res) => {
  const todos: Todo[] = [
    {
      guid: '1',
      task: 'First Task',
      progress: 0,
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      guid: '2',
      task: 'Second Task',
      progress: 0,
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      guid: '3',
      task: 'Third Task',
      progress: 0,
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      guid: '4',
      task: 'Fourth Task',
      progress: 0,
      createdDate: new Date(),
      updatedDate: new Date()
    },
  ]
  res.send({todos})
})
