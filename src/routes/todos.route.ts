import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { TodosController } from '@controllers/todos.controller';
import { CreateTodoDto } from '@dtos/todos.dto';

export class TodoRoute implements Routes {
  public path = '/todos';
  public router = Router();
  public todo = new TodosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.todo.getTodos);
    this.router.get(`${this.path}/:id`, this.todo.getTodoById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateTodoDto, true), this.todo.createTodo);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateTodoDto, true, true), this.todo.updateTodo);
    this.router.delete(`${this.path}/:id`, this.todo.deleteTodo);
  }
}
