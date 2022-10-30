import { Box, LoadingOverlay, Space } from "@mantine/core";
import { useStyles } from "./Appstyle";
import AddTodo from "./components/AddTodo";
import CardsTodo from "./components/CardsTodo";
import useStore from "./zustand/addTodo";

function App() {
  const { classes } = useStyles();

  return (
    <Box className={classes.main}>
      <Space h={40} />
      <AddTodo />
      <Space h={25} />
      <CardsTodo />
    </Box>
  );
}

export default App;
