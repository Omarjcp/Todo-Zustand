import { useEffect, useState, useCallback } from "react";
import {
  Paper,
  Text,
  ActionIcon,
  Tooltip,
  Badge,
  Code,
  Box,
  Group,
} from "@mantine/core";
import { BsCheckLg, BsTrashFill } from "react-icons/bs";
import { StatusTodo, Todo } from "../../types/todos";
import { statusTodo } from "../../utils/dictionary";
import dayjs from "dayjs";
import { useStyles } from "./style";
import useStore from "../../zustand/addTodo";

const CardsTodo: Function = (): JSX.Element[] => {
  const { classes } = useStyles();
  const getTodo = useStore((state) => state.todos);
  const deleteTodo = useStore((state) => state.todoRemove);

  const onDeleteTodo = (idTodo: string) => {
    let aqui = localStorage.getItem("todos-store");
    let si = JSON.parse(aqui as string);
    si = si.state.todos.filter((todo: Todo) => {
      return todo.id !== idTodo;
    });
    localStorage.setItem("todos-store", JSON.stringify(si));

    deleteTodo(idTodo);

    return;
  };

  console.log(getTodo);

  return getTodo?.map((todo: Todo) => (
    <Paper
      shadow="lg"
      p="lg"
      m="md"
      withBorder
      className={classes.containerCard}
    >
      <Group>
        <Badge color={statusTodo[todo.status]}>{todo.status}</Badge>
        <Box className={classes.containerText}>
          <Text weight={500} size="lg">
            {todo.title}
          </Text>
          <Text>{todo.description}</Text>
          <Code>{dayjs(todo.date).format("DD/MM/YYYY")}</Code>
        </Box>
      </Group>
      <Box className={classes.containerActions}>
        <Tooltip label="Done todo">
          <ActionIcon color="lime">
            <BsCheckLg size={18} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Delete todo">
          <ActionIcon onClick={() => onDeleteTodo(todo.id)} ml="md" color="red">
            <BsTrashFill size={18} />
          </ActionIcon>
        </Tooltip>
      </Box>
    </Paper>
  ));
};

export default CardsTodo;
