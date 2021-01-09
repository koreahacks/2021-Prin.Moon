import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" href="#contained-buttons" onClick={props.onClick}>
                {props.title}
            </Button>
        </ThemeProvider>
    </div>
  );
}
