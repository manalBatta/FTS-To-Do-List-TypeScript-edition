import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

type TodoItem = {
  text: string;
  complete: boolean;
};
const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[] | null>(null);

  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth: 752, margin: "2px auto" }}>
        <Typography sx={{ mb: 2, p: 2 }} variant="h3" component="div">
          My To-Do List
        </Typography>
        <List>
          <ListItem sx={{ background: "rgb(207, 255, 167)" }} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  onChange={(event) =>
                    console.log(event.target.checked)
                  }></Checkbox>
              </ListItemIcon>
              <ListItemText primary="ToDo today is nothing to do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  onChange={(event) =>
                    console.log(event.target.checked)
                  }></Checkbox>
              </ListItemIcon>
              <ListItemText primary="ToDo today is nothing to do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox
                  onChange={(event) =>
                    console.log(event.target.checked)
                  }></Checkbox>
              </ListItemIcon>
              <ListItemText primary="ToDo today is nothing to do" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Todo;
