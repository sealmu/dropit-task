import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { ReactNode, useState } from "react";

import styled from "styled-components";

type IProps = {
  onClose: () => void;
  isOpen: boolean;
  content: ReactNode;
  header: ReactNode;
};

const Modal = ({ onClose, isOpen, content, header }: IProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div style={{ marginRight: "20px", textAlign: "center" }}>
          <div>{header}</div>
        </div>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
