import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/logo.png";

import { KakaoTalk as KakaoTalkIcon } from "@styled-icons/remix-fill/KakaoTalk";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9%;
  width: 100vw;
  height: 100vh;
  background-color: #ff9333;
`;

const Description = styled.h2`
  display: block;
  margin-top: 20vh;
  margin-bottom: 5vh;
  color: #502600;
`;

const Logo = styled.img`
  margin-bottom: 20vh;
  width: 130px;
  height: 130px;
`;

const MakerNames = styled.span`
  display: block;
  margin-top: auto;
  color: #502600;
  font-size: 0.9rem;
`;

const KaKaoBtn = styled.div`
  padding: 0;
  width: 100%;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CustomKakaoIcon = styled(KakaoTalkIcon)`
  width: 25px;
  margin-right: 5px;
`;

export default function LoginPage() {
  return (
    <Wrapper>
      <Description>세상에 없던 빵!</Description>
      <Logo src={LogoImg} alt="로고 이미지" />
      <KaKaoBtn onClick={() => console.log("socialLogin!")}>
        <CustomKakaoIcon />
        카카오톡으로 로그인하기
      </KaKaoBtn>
      <MakerNames>2020 KOREA HACKS Prin-Moon</MakerNames>
    </Wrapper>
  );
}
