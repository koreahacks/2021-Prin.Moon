import React, { useState } from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Grid from "../components/Grid";
import Input from "../components/Input";
import SubTitle from "../components/SubTitle";
import TextArea from "../components/TextArea";
import Title from "../components/Title";
import TransparentHeader from "../components/TransparentHeader";
import Button from "../components/Button";
import TextField from "@material-ui/core/TextField";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import useMakePots from "../hooks/useMakePots";
import useGeoLocation from "../hooks/useGeoLocation";
import date from "../utils/date";
import { useHistory } from "react-router-dom";
import Validation from "../utils/validation";

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "white",
    borderRadius: "20px",
    height: "15vw",
    color: "#502600",
    textDecoration: "none",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
    color: "#502600",
    textDecoration: "none",
  },
}));

export default function CreateDeliveryPartyPage() {
  const classes = useStyles();
  const {
    deliveryForm,
    setDeliveryForm,
    postDeliveryPot,
    resetDeliveryForm,
  } = useMakePots();
  const { myLocation } = useGeoLocation();
  const [endTime, setEndTime] = useState(date.getCurrentDate());
  const history = useHistory();

  return (
    <>
      <Background>
        <TransparentHeader type="Arrow" />
        <Grid>
          <Title>배달음식</Title>
          <MarginedInput
            placeholder="제목"
            value={deliveryForm.title}
            onChange={(e) => {
              setDeliveryForm({ ...deliveryForm, title: e.target.value });
            }}
          />

          <MarginedSubTitle>언제까지 팟을 구하실 건가요?</MarginedSubTitle>

          <ThemeProvider theme={theme}>
            <form className={classes.container} color="primary" noValidate>
              <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue={endTime}
                onChange={(e) => {
                  setEndTime(e.target.value);
                }}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </ThemeProvider>
          <MarginedInput
            placeholder="앱 링크"
            value={deliveryForm.appLink}
            onChange={(e) => {
              setDeliveryForm({ ...deliveryForm, appLink: e.target.value });
            }}
          />
          <MarginedInput
            placeholder="배달 팁"
            value={deliveryForm.fee}
            onChange={(e) => {
              setDeliveryForm({ ...deliveryForm, fee: e.target.value });
            }}
          />
          <MarginedInput
            placeholder="오픈카톡방 링크"
            value={deliveryForm.kakaoLink}
            onChange={(e) => {
              setDeliveryForm({ ...deliveryForm, kakaoLink: e.target.value });
            }}
          />
          <MarginedTextArea
            placeholder="메모(선택)"
            value={deliveryForm.memo}
            onChange={(e) => {
              setDeliveryForm({ ...deliveryForm, memo: e.target.value });
            }}
          />
          <Button
            color={
              Validation.isValidDeliveryForm({
                ...deliveryForm,
                endTime,
                latitude: myLocation.lat,
                longitude: myLocation.lng,
              })
                ? "primary"
                : "secondary"
            }
            onClick={
              Validation.isValidDeliveryForm({
                ...deliveryForm,
                endTime,
                latitude: myLocation.lat,
                longitude: myLocation.lng,
              })
                ? async (e) => {
                    e.preventDefault();
                    if (window.confirm("게시글을 올리시겠어요?")) {
                      try {
                        await postDeliveryPot(
                          endTime,
                          myLocation.lat,
                          myLocation.lng
                        );
                        alert("파티 모집글을 올렸습니다!");
                        resetDeliveryForm();
                        history.push("/");
                      } catch (e) {
                        alert("파티 모집글 에러!");
                      }
                    }
                  }
                : (e) => {
                    e.preventDefault();
                  }
            }
          >
            게시하기
          </Button>
        </Grid>
      </Background>
    </>
  );
}
