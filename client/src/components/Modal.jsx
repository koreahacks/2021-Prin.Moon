import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

const Align = styled.div`
  display: flex;
  justify-content: center;
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    border: 0,
    borderRadius: 15,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
    outline: "none",
  },
  header: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: "block",
    backgroundColor: "#ffae66",
    width: 300,
    padding: theme.spacing(2, 4, 2),
  },
  body: {
    padding: theme.spacing(1, 3, 1),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.header}>
        <Align>{props.title}</Align>
      </div>
      <div className={classes.body}>
        <Align>{props.children}</Align>
      </div>
      <Align onClick={handleClose}>
        {props.buttons.map((button) => button)}
      </Align>
    </div>
  );

  return (
    <div>
      <Button color={props.openButtonColor} onClick={handleOpen}>
        {props.openButtonTitle}
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
