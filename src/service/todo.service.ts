import { DocumentDefinition, FilterQuery } from "mongoose";
import Todo, { TodoDocument } from "../model/todo.modal";

export async function createTodo(input: DocumentDefinition<TodoDocument>) {
  try {
    return await Todo.create(input);
  } catch (err) {
    throw new Error(err);
  }
}

export async function getAllTodos() {
  return await Todo.find();
}

export async function getTodo(query: FilterQuery<TodoDocument>) {
  return await Todo.findOne(query).lean();
}

export async function update(query: FilterQuery<TodoDocument>, input: DocumentDefinition<TodoDocument>) {
  return await Todo.findOneAndUpdate(query, input, {
    new: true
  })
}