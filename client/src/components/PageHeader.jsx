import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { PersonFill as PersonFillIcon } from "@styled-icons/bootstrap/PersonFill";
import { BellFill as BellFillIcon } from "@styled-icons/bootstrap/BellFill";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 7vh;
  padding: 1.5vh 6vw;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const ArrowIcon = styled(ArrowBack)`
  display: block;
  width: 3vh;
  height: 3vh;
  color: #ac5910;
  margin: 0;
`;

const PersonIcon = styled(PersonFillIcon)`
  display: block;
  width: 3vh;
  height: 3vh;
  color: #ffc591;
`;

const BellIcon = styled(BellFillIcon)`
  display: block;
  width: 3vh;
  height: 3vh;
  color: #ffc591;
`;

const HeaderTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
`;

export default function PageHeader({ title, type, ...props }) {
  const history = useHistory();
  return (
    <Wrapper>
      <ArrowIcon
        onClick={() => {
          history.goBack();
        }}
      />
      <HeaderTitle>{title}</HeaderTitle>
      {type === "mypage" ? (
        <BellIcon />
      ) : (
        <PersonIcon
          onClick={() => {
            history.push("/mypage");
          }}
        />
      )}
    </Wrapper>
  );
}
