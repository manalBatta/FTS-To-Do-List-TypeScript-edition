import { TodoItem } from "../types/types";
import { IconButton, ListItemButton, ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import React, { FC } from "react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

interface TodoProps {
  todo: TodoItem;
  toggleTodoCompletion: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  deleteTodo: (id: string) => void;
}

const Todo: FC<TodoProps> = ({ todo, toggleTodoCompletion, deleteTodo }) => {
  return (
    <ListItem disablePadding key={todo.id}>
      <ListItemButton>
        <Checkbox
          checked={todo.complete}
          onChange={(event) => toggleTodoCompletion(event, todo.id)}
        />
        <ListItemText primary={todo.text} />

        <IconButton sx={{ width: 40 }} onClick={() => deleteTodo(todo.id)}>
          <DeleteSweepIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

export default Todo;
