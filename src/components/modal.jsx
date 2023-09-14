import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Outlet } from "react-router-dom";
import useModalRoute from "../hooks/useModalRoute";
import { useState } from "react";

const Modal = () => {
  const [ open, setOpen ] = useState(true);
  const { endModalPath } = useModalRoute();

  const closeModal = () => {
    endModalPath();
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle>モーダルダイアログ</DialogTitle>
      <DialogContent>
        <Outlet />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;