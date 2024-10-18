import {
  Box,
  Grid2,
  IconButton,
  ListItemButton,
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
import { todo } from "../constants/constants";
import { TodoItem } from "../types/types";

const Todo = () => {
  const generateId = useId();
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[] | []>(todo);
  const toggleTodoCompletion = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void => {
    const { checked } = event.target;

    setTodoList((prev = []) =>
      prev.map((item) =>
        item.id === id && item.complete !== checked
          ? { ...item, complete: checked }
          : item
      )
    );
  };

  const addTodo = (): void => {
    if (todoText?.trim().length !== 0) {
      setTodoList((prev = []) => [
        {
          id: generateId,
          text: todoText,
          complete: false,
        },
        ...prev,
      ]);
      setTodoText("");
    }
  };

  const deleteTodo = (id: string): void => {
    setTodoList((prev = []) => prev.filter((item) => item.id !== id));
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
                      onChange={(event) => toggleTodoCompletion(event, todo.id)}
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
