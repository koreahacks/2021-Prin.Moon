import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Grid from "../components/Grid";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Title from "../components/Title";
import TransparentHeader from "../components/TransparentHeader";
import Button from "../components/Button";
import Validation from "../utils/validation";
import { useHistory } from "react-router-dom";
import useMakeOTTPots from "../hooks/useMakeOTTPots";

const MarginedInput = styled(Input)`
  margin: 1vh 0;
`;

const MarginedTextArea = styled.textarea`
  margin: 1vh 0;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 15px;
  resize: none;
  height: 18.5vh;
  font-family: "Noto Sans KR", sans-serif;

  ::placeholder,
  ::-webkit-input-placeholder {
    text-align: center;
    line-height: 18.5vh;
    font-family: "Noto Sans KR", sans-serif;
  }
  :-ms-input-placeholder {
    text-align: center;
    line-height: 18.5vh;
    font-family: "Noto Sans KR", sans-serif;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function CreateOTTPartyPage() {
  const { OTTForm, setOTTForm, postOTTPot, resetOTTForm } = useMakeOTTPots();
  const history = useHistory();
  const [fee, setFee] = React.useState("");
  const [memo, setMemo] = React.useState("");

  return (
    <>
      <Background>
        <TransparentHeader type="Arrow" />
        <Grid>
          <Title>OTT</Title>
          <MarginedInput
            placeholder="제목"
            value={OTTForm.title}
            onChange={(e) => {
              setOTTForm({ ...OTTForm, title: e.target.value });
            }}
          />
          <MarginedInput
            placeholder="남은 인원  (명)"
            value={OTTForm.totalPeople}
            onChange={(e) => {
              setOTTForm({ ...OTTForm, totalPeople: e.target.value });
            }}
          />

          <MarginedInput
            placeholder="가격"
            value={fee}
            onChange={(e) => {
              setFee(e.target.value);
            }}
          />

          <MarginedInput
            placeholder="오픈카톡방 링크"
            value={OTTForm.kakaoLink}
            onChange={(e) => {
              setOTTForm({ ...OTTForm, kakaoLink: e.target.value });
            }}
          />

          <MarginedTextArea
            placeholder="메모(선택)"
            text={OTTForm.memo}
            onChange={(e) => {
              setMemo(e.target.value);
            }}
          />

          <Button
            color={
              Validation.isValidOTTForm({ ...OTTForm, fee, memo })
                ? "primary"
                : "secondary"
            }
            onClick={
              Validation.isValidOTTForm({ ...OTTForm, fee, memo })
                ? async (e) => {
                    e.preventDefault();
                    if (window.confirm("게시글을 올리시겠어요?")) {
                      try {
                        await postOTTPot(memo, fee);
                        alert("파티 모집글을 올렸습니다!");
                        resetOTTForm();
                        history.push("/");
                      } catch (e) {
                        alert("파티 모집글 에러!");
                      }
                    }
                  }
                : (e) => e.preventDefault()
            }
          >
            게시하기
          </Button>
        </Grid>
      </Background>
    </>
  );
}
