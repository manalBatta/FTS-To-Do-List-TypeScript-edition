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
import TextField from "@mui/material/TextField";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
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

  const generateId = useId();
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[] | null>(initialState);
  //handle a checkbox check
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

  const addTodo = (): void => {
    if (todoText.length !== 0) {
      const newTodo: TodoItem = {
        id: generateId,
        text: todoText,
        complete: false,
      };
      setTodoList((prev) => {
        if (!prev) return null;
        return [newTodo, ...prev];
      });
      setTodoText("");
    }
  };

  const deleteTodo = (id: string): void => {
    setTodoList((prev) => {
      if (!prev) return null;

      return prev.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
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
          <TextField
            label="New ToDo"
            value={todoText}
            sx={{ width: 400 }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTodoText(event.target.value)
            }
          />
          <IconButton onClick={addTodo}>
            <AddIcon></AddIcon>
          </IconButton>
        </Grid2>

        <List>
          {todoList?.length &&
            todoList.map((todo: TodoItem) => {
              return (
                <ListItem disablePadding key={todo.id}>
                  {/* Main clickable item */}
                  <ListItemButton>
                    <Checkbox
                      checked={todo.complete}
                      onChange={(event) => handleChange(event, todo.id)}
                    />
                    <ListItemText primary={todo.text} />

                    {/* Replace ListItemButton with IconButton for delete action */}
                    <IconButton
                      sx={{ width: 40 }} // You can adjust the width as needed
                      onClick={() => deleteTodo(todo.id)}>
                      <DeleteSweepIcon />
                    </IconButton>
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
