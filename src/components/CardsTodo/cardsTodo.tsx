import { Text } from "@mantine/core";
import { StatusTodo } from "../../types/todos";
import useStore from "../../zustand/addTodo";
import { todosForStatus } from "../../utils/todosForStatus";
import CardTodo from "./Card/cardTodo";

const CardsTodo = () => {
  const getTodo = useStore((state) => state.todos);

  const todosDone = todosForStatus(getTodo, StatusTodo.DONE);
  const todosAwait = todosForStatus(getTodo, StatusTodo.AWAIT);

  return (
    <>
      <Text weight={500} size="lg">
        TO DO
      </Text>
      {todosAwait.length ? (
        todosAwait?.map((todo) => <CardTodo todo={todo} />)
      ) : (
        <Text color="gray">You have nothing to do.</Text>
      )}

      <Text weight={500} size="lg" mt="xl">
        DONE
      </Text>
      {todosDone.length ? (
        todosDone?.map((todo) => <CardTodo todo={todo} />)
      ) : (
        <Text color="gray">You have to do done.</Text>
      )}
    </>
  );
};

export default CardsTodo;
