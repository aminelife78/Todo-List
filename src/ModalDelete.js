import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ModalTodo = ({ handleClose, open, deleteTodo }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"êtes vous sûr de supprimer la todo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            vous ne pouvez pas modifier votre réponse si vous cliquez sur
            accepter.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Refuser</Button>
          <Button onClick={deleteTodo} autoFocus>
            Accepter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalTodo;
