import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Categories from "./Categories";
import Todo from "./Todo";
import { useState, useEffect } from "react";
import FormTodo from "./FormTodo";
import ModalTodo from "./ModalDelete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalUpdate from "./ModalUpdate";

function App() {
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else if (type === "Success") {
      toast.success(message);
    }
  };

  // ouvrire modale delete
  const [open, setOpen] = useState(false);

  // ouvrite modal update
  const [openUpdate, setOpenUpdate] = useState(false);

  // objet todo a modifier
  const  [todoUpdate, setTodoUpdate] = useState({});

  // recuperer le id de button cliquer
  const [idClick, setIdClick] = useState("");
  // tableau de toute les  taches
  const [todos, setTodos] = useState([]);

  // les tache filterer par categorie
  const [filterTodo, setFilterTodo] = useState([]);

  // au chargement de site assigner toutes les todos au state filterTodo pour les afficher
  useEffect(() => {
    setFilterTodo([...todos]);
  }, [todos]);

  const handleClickOpen = (idx, type) => {
    if (type === "delete") {
      setOpen(true);
      setIdClick(idx);
    } else {
      setOpenUpdate(true);
      const newTodo = todos.find(todo=>{
        return todo.id === idx
      })
      
      setTodoUpdate({...newTodo});
    }
  };
  
  const handleClose = () => {
    setOpen(false);
    setOpenUpdate(false);
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 100), title: todo, done: false },
    ]);
    notify("Tache bien ajouté", "Success");
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== idClick;
    });
    setTodos(newTodos);
    setFilterTodo(newTodos)
    handleClose();
    notify("Tache bien suprimé", "Error");
  };

  const updateTodo = (myTitle)=>{
    const newTodos = todos.map(todo=>{
      if(todo.title === todoUpdate.title){
        return {...todo,title:myTitle}
      }else{

        return todo;
      }
    })
    setTodos(newTodos)
    setFilterTodo(newTodos)
    handleClose();
  }

  
  const successTodo = (idx) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === idx) {
        
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
    notify("Tache fini ", "Success");
  };

  const filtreCategories = (categorie) => {
    if (categorie === "tous") {
      setFilterTodo(todos);
    } else if (categorie === "fini") {
      const todosDone = todos.filter((todo) => {
        return todo.done === true;
      });
      setFilterTodo([...todosDone]);
    } else if (categorie === "pasfini") {
      const todosNoDone = todos.filter((todo) => {
        return todo.done === false;
      });
      setFilterTodo([...todosNoDone]);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            paddingBottom: "10px",
            width: 450,

            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <h1>Todo-List</h1>
          <Categories filtreCategories={filtreCategories} />
          <Todo
            todos={filterTodo}
            addTodo={addTodo}
            handleClickOpen={handleClickOpen}
            successTodo={successTodo}
          />
          <FormTodo addTodo={addTodo} />
        </Box>
      </Container>
      <ModalTodo
        deleteTodo={deleteTodo}
        handleClose={handleClose}
        open={open}
      />
      <ModalUpdate openUpdate={openUpdate} handleClose={handleClose} todoUpdate={todoUpdate} updateTodo={updateTodo}  />
      <ToastContainer />
    </>
  );
}

export default App;
