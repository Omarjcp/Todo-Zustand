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
import { MdPublishedWithChanges } from "react-icons/md";
import { StatusTodo, Todo } from "../../../types/todos";
import { statusTodo } from "../../../utils/dictionary";
import dayjs from "dayjs";
import { useStyles } from "./style";
import useStore from "../../../zustand/addTodo";

const CardTodo: React.FC<{
  todo: Todo;
}> = ({ todo }) => {
  const { classes } = useStyles();
  const deleteTodo = useStore((state) => state.todoRemove);
  const changeStatusTodo = useStore((state) => state.changeStatus);

  const onDeleteTodo = (idTodo: string) => {
    deleteTodo(idTodo);
    return;
  };

  const onChangeStatus = (idTodo: string, statusToUpdate: StatusTodo) => {
    changeStatusTodo(idTodo, StatusTodo[statusToUpdate]);
    return;
  };

  return (
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
        {todo.status === StatusTodo.AWAIT ? (
          <Tooltip label="Done todo">
            <ActionIcon
              onClick={() => onChangeStatus(todo.id, StatusTodo.DONE)}
              color="lime"
            >
              <BsCheckLg size={18} />
            </ActionIcon>
          </Tooltip>
        ) : (
          <Tooltip label="Await todo">
            <ActionIcon
              onClick={() => onChangeStatus(todo.id, StatusTodo.AWAIT)}
              color="orange"
            >
              <MdPublishedWithChanges size={23} />
            </ActionIcon>
          </Tooltip>
        )}
        <Tooltip label="Delete todo">
          <ActionIcon onClick={() => onDeleteTodo(todo.id)} ml="md" color="red">
            <BsTrashFill size={18} />
          </ActionIcon>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default CardTodo;
