import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  containerCard: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.colors.gray[0],
    width: "80rem",
    maxWidth: "80%",
  },

  containerText: {
    maxWidth: "90%",
  },

  containerActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));
