import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Todo } from '@interfaces/todos.interface';
import { TodoModel } from '@models/todos.model';

@Service()
export class TodoService {
  public async findAllTodo(): Promise<Todo[]> {
    const todos: Todo[] = await TodoModel.find();
    return todos;
  }

  public async findTodoById(todoId: string): Promise<Todo> {
    const findTodo: Todo = await TodoModel.findOne({ _id: todoId });
    if (!findTodo) throw new HttpException(409, "Todo doesn't exist");

    return findTodo;
  }

  public async createTodo(todoData: Todo): Promise<Todo> {
    const createTodo: Todo = await TodoModel.create(todoData);

    return createTodo;
  }

  public async updateTodo(todoId: string, todoData: Todo): Promise<Todo> {
    const update = todoData;
    if (!todoData?.notify) {
      update['$unset'] = { notify: 1 };
    }
    const updateTodoById: Todo = await TodoModel.findByIdAndUpdate(todoId, update, { new: true });
    if (!updateTodoById) throw new HttpException(409, "Todo doesn't exist");

    return updateTodoById;
  }

  public async deleteTodo(todoId: string): Promise<Todo> {
    const deleteTodoById: Todo = await TodoModel.findByIdAndDelete(todoId);
    if (!deleteTodoById) throw new HttpException(409, "Todo doesn't exist");

    return deleteTodoById;
  }
}
