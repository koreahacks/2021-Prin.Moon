import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from "styled-components"
// primary : 주황색 // secondary : 버튼 

const Bold = styled.div`
  font-weight: bold;
`
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffae66',
      },
      secondary: {
        main: '#e2e2e2',
      },
    },
  });

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      borderRadius: 15,
    },
    
  },
}));

// 회색일때는 color: secondary // 주황색 일때는 color: primary 
export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
            <Button fontWeight="fontWeightBold" variant="contained" color={props.color} href="#contained-buttons" onClick={props.onClick}>
              <Bold>
                {props.title}
              </Bold>
            </Button>
        </ThemeProvider>
    </div>
  );
}
