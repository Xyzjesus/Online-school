import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { ReactNode } from "react";


export interface ModalProps{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}



// do not use FC -> bad practice 
const Modal = ({onClose, isOpen, title, children}: ModalProps) => {
  // const { onClose, isOpen, title, children } = props;

  // const handleClose = () => {
  //   onClose();
  // };

  return (
    <Dialog fullWidth onClose={() => onClose()} open={isOpen}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
    </Dialog>
  );
}

export { Modal };
