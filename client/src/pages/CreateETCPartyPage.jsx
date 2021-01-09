import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Grid from "../components/Grid";
import Input from "../components/Input";
import SubTitle from "../components/SubTitle";
import TextArea from "../components/TextArea";
import Title from "../components/Title";
import TransparentHeader from "../components/TransparentHeader";
import Button from "../components/Button";
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffae66",
    },
    secondary: {
      main: "#e2e2e2",
    },
  },
});

const MarginedInput = styled(Input)`
  margin: 1vh 0;
`;

const MarginedTextArea = styled(TextArea)`
  margin: 1vh 0;
`;

const MarginedSubTitle = styled(SubTitle)`
  margin: 1vh 0;
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: '20px',
    height: '15vw',
    color: '#502600',
    textDecoration: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
    color: '#502600',
    textDecoration: 'none',
  },
}));

export default function CreateETCPartyPage() {
  const classes = useStyles();
  return (
    <>
      <Background>
        <TransparentHeader type="Arrow" />
        <Grid>
          <Title>기타</Title>
          <MarginedInput placeholder="제목" />
          <ThemeProvider theme={theme}>
            <form className={classes.container} color="primary" noValidate>
              <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue="2020-01-10T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </ThemeProvider>
          <MarginedInput placeholder="이제여기에타임피커들어가야함" />
          <MarginedInput placeholder="제품 링크" />
          <MarginedInput placeholder="택비비" />
          <MarginedInput placeholder="오픈카톡방 링크" />
          <MarginedTextArea placeholder="메모(선택)" />
          <Button
            color="primary"
            onClick={() => {
              if (window.confirm("게시글을 올리시겠어요?")) {
              }
            }}
          >
            게시하기
          </Button>
        </Grid>
      </Background>
    </>
  );
}
