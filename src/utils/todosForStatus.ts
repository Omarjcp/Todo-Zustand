import { StatusTodo, Todo } from "../types/todos";

export const todosForStatus = (todos: Todo[], status: StatusTodo) => {
  return todos.filter((todo) => todo.status === status);
};
