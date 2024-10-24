import AddIcon from "@mui/icons-material/Add";
import { Box, Grid2, IconButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import React, { FC, useId, useState } from "react";
import { todoMockData } from "../fixtures/fixtures";
import Todo from "../Todo/Todo";
import { TodoItem } from "../types/types";

const TodoList: FC = () => {
  const generateId = useId();
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[] | []>(todoMockData);
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
                <Todo
                  key={todo.id} // Ensure you include a unique key prop here
                  todo={todo}
                  toggleTodoCompletion={toggleTodoCompletion}
                  deleteTodo={deleteTodo}></Todo>
              );
            })}
        </List>
      </Box>
    </>
  );
};

export default TodoList;
