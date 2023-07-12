import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { TodoService } from '@services/todos.service';
import { Todo } from '@interfaces/todos.interface';

export class TodosController {
  public todo = Container.get(TodoService);

  public getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllTodosData: Todo[] = await this.todo.findAllTodo();

      res.status(200).json({ data: findAllTodosData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: todoId } = req.params;
      const findOneTodoData: Todo = await this.todo.findTodoById(todoId);

      res.status(200).json({ data: findOneTodoData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoData: Todo = req.body;
      const createTodoData: Todo = await this.todo.createTodo(todoData);

      res.status(201).json({ data: createTodoData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: todoId } = req.params;
      const todoData: Todo = req.body;
      const updateTodoData: Todo = await this.todo.updateTodo(todoId, todoData);

      res.status(200).json({ data: updateTodoData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: todoId } = req.params;
      const deleteTodoData: Todo = await this.todo.deleteTodo(todoId);

      res.status(200).json({ data: deleteTodoData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
