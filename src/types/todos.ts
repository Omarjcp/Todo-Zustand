import { Dayjs } from "dayjs";

export interface ITodos {
  todos: Todo[];
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  date: Dayjs;
  status: StatusTodo;
}

export enum StatusTodo {
  AWAIT = "AWAIT",
  DONE = "DONE",
}
