import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Grid from "../components/Grid";
import Title from "../components/Title";
import TransparentHeader from "../components/TransparentHeader";
import Button from "../components/Button";

const ButtonWrapper = styled.div`
  margin-top: 4vh;
`;

export default function CategorySelectPage() {
  return (
    <Background>
      <TransparentHeader type="Close" />
      <Grid>
        <Title>카테고리를 골라주세요</Title>
        <ButtonWrapper>
          <Button color="primary" width="100%">
            배달
          </Button>
          <Button color="primary" width="100%">
            OTT
          </Button>
          <Button color="primary" width="100%">
            기타
          </Button>
        </ButtonWrapper>
      </Grid>
    </Background>
  );
}
