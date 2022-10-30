import create from "zustand";
import { persist } from "zustand/middleware";
import { Todo } from "../types/todos";

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  //   todoDone: (id: string) => void;
  todoRemove: (id: string) => void;
}

const useStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: state.todos.concat(todo) })),
      //   todoDone: (todo) => set((state) => ({})),
      todoRemove: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo?.id !== id),
        })),
    }),
    { name: "todos-store" }
  )
);

export default useStore;
