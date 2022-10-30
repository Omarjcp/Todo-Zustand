import { useState } from "react";
import { Text, TextInput, Button, Box, Textarea } from "@mantine/core";
import { useInputState, randomId } from "@mantine/hooks";
import { StatusTodo, Todo } from "../../types/todos";
import { useStyles } from "./style";
import dayjs from "dayjs";
import useStore from "../../zustand/addTodo";

const AddTodo = () => {
  const { classes } = useStyles();
  const addTodo = useStore((state) => state.addTodo);

  const [hash, setHash] = useState(randomId());
  const [todo, setTodo] = useInputState<Todo>({
    id: hash,
    title: "",
    description: "",
    status: StatusTodo.AWAIT,
    date: dayjs(),
  });

  const crearState = () => setTodo({ ...todo, title: "", description: "" });

  const onAddTodo = () => {
    setHash(randomId());
    addTodo({ ...todo, id: hash });
    crearState();
  };

  return (
    <Box className={classes.containerForm}>
      <Text weight={600} mb="md" size="lg" align="center">
        Add new TODO
      </Text>
      <TextInput
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.currentTarget.value })}
        placeholder="Title's todo"
        label="TItle"
        withAsterisk
        required
        mb="md"
      />
      <Textarea
        value={todo.description}
        onChange={(e) =>
          setTodo({ ...todo, description: e.currentTarget.value })
        }
        mb="lg"
        placeholder="Description's todo"
        label="Description"
      />
      <Button onClick={onAddTodo}>Add Todo</Button>
    </Box>
  );
};

export default AddTodo;
