import { Express, Response, Request } from 'express'
import { createTodoHandler, getTodoListHandler, updateTodoHandler, getTodoHandler } from './controller/todo.controller'

export default function routes(app: Express) {

  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.sendStatus(200)
  })

  // Create Todo
  app.post('/api/todos/', createTodoHandler)

  // Get all todos
  app.get('/api/todos/', getTodoListHandler)

  // Get todo
  app.get('/api/todos/:todoId', getTodoHandler)

  // Update todo
  app.put(`/api/todos/:todoId`, updateTodoHandler)
}