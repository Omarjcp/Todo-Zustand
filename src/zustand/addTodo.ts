import create from "zustand";
import { persist } from "zustand/middleware";
import { StatusTodo, Todo } from "../types/todos";

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  changeStatus: (id: string, valueToUpdate: StatusTodo) => void;
  todoRemove: (id: string) => void;
}

const useStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: state.todos.concat(todo) })),
      changeStatus: (id, valueToUpdate) =>
        set((state) => ({
          todos: state?.todos?.map((todoToUpdate) => {
            if (todoToUpdate?.id === id) {
              return { ...todoToUpdate, status: StatusTodo[valueToUpdate] };
            }
            return todoToUpdate;
          }),
        })),
      todoRemove: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo?.id !== id),
        })),
    }),
    { name: "todos-store" }
  )
);

export default useStore;
