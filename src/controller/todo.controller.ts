import { createTodo, getAllTodos, update, getTodo } from "../service/todo.service"
import { Request, Response } from 'express'
import log from "../logger";

export async function createTodoHandler(req: Request, res: Response) {
  try {
    const todo = await createTodo(req.body);
    return res.send(todo.toJSON());
  } catch (error) {
    log.error(error);
    return res.sendStatus(409).send(error.message);
  }
}

export async function getTodoListHandler(req: Request, res: Response) {
  const todos = await getAllTodos();
  return res.send(todos);
}

export async function getTodoHandler(req: Request, res: Response) {
  const id = req.params.todoId;
  const todo = await getTodo({ _id: id });
  return res.send(todo);
}

export async function updateTodoHandler(req: Request, res: Response) {
  const id = req.params.todoId;
  const todo = await update({ _id: id }, req.body)
  return res.send(todo)
}