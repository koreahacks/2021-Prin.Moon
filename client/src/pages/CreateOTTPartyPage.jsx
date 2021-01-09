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

const MarginedTextArea = styled(TextArea)`
  margin: 1vh 0;
`;

export default function CreateOTTPartyPage() {
  const { OTTForm, setOTTForm, postOTTPot, resetOTTForm } = useMakeOTTPots();
  const history = useHistory();

  console.log(OTTForm);

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
            value={OTTForm.fee}
            onChange={(e) => {
              setOTTForm({ ...OTTForm, fee: e.tareget.value });
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
            value={OTTForm.memo}
            onChange={(e) => {
              console.log(e.target.value);
              setOTTForm({ ...OTTForm, memo: e.target.value });
            }}
          />

          <Button
            color={Validation.isValidOTTForm(OTTForm) ? "primary" : "secondary"}
            onClick={
              Validation.isValidOTTForm(OTTForm)
                ? async (e) => {
                    e.preventDefault();
                    if (window.confirm("게시글을 올리시겠어요?")) {
                      try {
                        await postOTTPot();
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
