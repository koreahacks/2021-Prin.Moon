import React, {Fragment} from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Party from "../components/Party";
const Body = styled.div`
  background:rgba(255, 174, 103, 0.15);
  display: block;
  width: 100%;
  height: 100%;
`
const Parties = styled.div`
  padding: 5%;
  height: 300vw;
`
export default function RecruitedParty(props) {
  return (
    <Body>
      <Header title={"내가 모집한 팟"} />
      <Parties>
        <Party place={"법대후문"} title={"왓챠 팟 구함"} time={"10분 전"}></Party>
        <Party></Party>
      </Parties>
    </Body>
  );
}
