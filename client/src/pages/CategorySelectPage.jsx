import React from "react";
import styled from "styled-components";
import Background from "../components/Background";
import Grid from "../components/Grid";
import Title from "../components/Title";
import TransparentHeader from "../components/TransparentHeader";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

const ButtonWrapper = styled.div`
  margin-top: 4vh;
  height: 20vh;
`;

export default function CategorySelectPage() {
  const history = useHistory();

  return (
    <Background>
      <TransparentHeader type="Close" />
      <Grid>
        <Title>카테고리를 골라주세요</Title>
        <ButtonWrapper>
          <Button
            color="primary"
            width="100%"
            height="100px"
            onClick={(e) => {
              e.preventDefault();
              history.push("/category/create/delivery");
            }}
          >
            배달
          </Button>
          <Button
            color="primary"
            width="100%"
            onClick={(e) => {
              e.preventDefault();
              history.push("/category/create/ott");
            }}
          >
            OTT
          </Button>
        </ButtonWrapper>
      </Grid>
    </Background>
  );
}
