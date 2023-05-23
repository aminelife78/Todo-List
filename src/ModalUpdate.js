import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";

const ModalUpdate = ({ openUpdate, handleClose, todoUpdate, updateTodo }) => {
  const { title } = todoUpdate;
  const [changeForm, setChangeForm] = useState();
  useEffect(() => {
    setChangeForm(title);
  }, [title]);
  const handleUpdate = () => {
    updateTodo(changeForm);
  };

  return (
    <div>
      <Dialog open={openUpdate}>
        <DialogTitle>Modifier la tache</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => setChangeForm(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Titre"
            type="text"
            fullWidth
            variant="standard"
            value={changeForm}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleUpdate}>Modifier</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalUpdate;
