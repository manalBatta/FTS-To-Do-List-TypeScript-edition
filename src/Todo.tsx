import {
  Box,
  Grid2,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { useId } from "react";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type TodoItem = {
  id: string;
  text: string;
  complete: boolean;
};
const Todo = () => {
  const initialState = [
    {
      id: useId(),
      text: "Buy groceries",
      complete: false,
    },
    {
      id: useId(),
      text: "Finish React project",
      complete: true,
    },
    {
      id: useId(),
      text: "Schedule doctor appointment",
      complete: false,
    },
    {
      id: useId(),
      text: "Walk the dog",
      complete: true,
    },
    {
      id: useId(),
      text: "Read a book for 30 minutes",
      complete: false,
    },
  ];

  const [todoList, setTodoList] = useState<TodoItem[] | null>(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void => {
    setTodoList((prev) => {
      if (!prev) return null;

      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, complete: event.target.checked };
        }
        return item;
      });
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth: 752, margin: "2px auto" }}>
        <Typography sx={{ mb: 2, p: 2 }} variant="h3" component="div">
          My To-Do List
        </Typography>
        <Grid2>
          <TextField label="freeSolo" />
          <IconButton>
            <AddIcon></AddIcon>
          </IconButton>
        </Grid2>

        <List>
          {todoList?.length &&
            todoList.map((todo: TodoItem) => {
              return (
                <ListItem disablePadding key={todo.id}>
                  {/* TODO: replce the listItemButton with appropriate component */}
                  <ListItemButton>
                    <Checkbox
                      checked={todo.complete}
                      onChange={(event) =>
                        handleChange(event, todo.id)
                      }></Checkbox>
                    <ListItemText primary={todo.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
      </Box>
    </>
  );
};

export default Todo;
