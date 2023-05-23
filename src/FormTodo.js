import React, {useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const FormTodo = ({ addTodo }) => {
  
  const [todo, setTodo] = useState("");
  
  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form>
      <TextField
        size="small"
        sx={{ width: "330px" }}
        id="outlined-basic"
        label="Titre de la tache"
        variant="outlined"
        value={todo}
        onChange={handleChangeTodo}
      />
      <Button
        onClick={handleAddTodo}
        size="medium"
        sx={{ marginLeft: "5px" }}
        variant="contained"
      >
        Ajouter
      </Button>
    </form>
  );
};

export default FormTodo;
