import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from "./Button";
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { getThemeProps } from '@material-ui/styles';

const Align = styled.div`
  display: flex;
  justify-content: center;
`
const Header = styled.div`
  background-color: '#FF9333',
  height: 30%;
`
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF9333',
    },
    secondary: {
      main: '#E2E2E2',
    },
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
      <Header>
        <Align>
          <h2 id="simple-modal-title">{props.title}</h2>
        </Align>
      </Header>
      <Align>
        <p id="simple-modal-description">
          {props.contents}
        </p>
      </Align>
      <Align>
        {
          props.buttons.map((button)=>button)
        }
      </Align>
    </div>
  );

  return (
    <div>
      <Button title={props.openButtonTitle} color={props.openButtonColor} onClick = {handleOpen}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
