import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Todo = ({ todos, deleteTodo, addTodo, handleClickOpen, successTodo }) => {
  return (
    <>
      <List component="nav" aria-label="mailbox folders">
        {todos.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              sx={{
                backgroundColor: "blue",
                width: "440px",
                marginBottom: "10px",
                "&:hover": {
                  py: "20px",
                  transition: "0.5s",
                },
              }}
            >
              <ListItemText sx={{ color: "white" }} primary={todo.title} />
              <CheckOutlinedIcon
                onClick={() => successTodo(todo.id)}
                sx={{
                  border: "3px solid",
                  borderColor: "success.main",
                  borderRadius: "50%",
                  marginLeft: "10px",
                  color: todo.done ? "white" : "success.main",
                  backgroundColor: todo.done ? "success.main" : "white",
                }}
              />
              <ModeOutlinedIcon
                onClick={(e) => handleClickOpen(todo.id, e.target.id)}
                id="update"
                sx={{
                  border: "3px solid ",
                  borderColor: "primary.main",
                  borderRadius: "50%",
                  marginLeft: "10px",
                  color: "primary.main",
                  backgroundColor: "white",
                }}
              />
              <DeleteOutlinedIcon
                onClick={(e) => handleClickOpen(todo.id, e.target.id)}
                id="delete"
                sx={{
                  border: "3px solid ",
                  borderColor: "error.main",
                  borderRadius: "50%",
                  marginLeft: "10px",
                  color: "error.main",
                  backgroundColor: "white",
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Todo;
