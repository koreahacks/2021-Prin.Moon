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

const MarginedInput = styled(Input)`
  margin: 1vh 0;
`;

const MarginedTextArea = styled(TextArea)`
  margin: 1vh 0;
`;

const MarginedSubTitle = styled(SubTitle)`
  margin: 1vh 0;
`;

export default function CreateOTTPartyPage() {
  return (
    <>
      <Background>
        <TransparentHeader type="Arrow" />
        <Grid>
          <Title>OTT</Title>
          <MarginedInput placeholder="제목" />
          <MarginedInput placeholder="남은 인원  (명)" />
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