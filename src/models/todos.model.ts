import { model, Schema, Document } from 'mongoose';
import { Todo } from '@interfaces/todos.interface';

const TodoSchema: Schema = new Schema({
  note: {
    type: String,
    required: true,
  },
  notify: {
    type: Date,
    required: false,
    index: true,
  },
});

export const TodoModel = model<Todo & Document>('Todo', TodoSchema);
