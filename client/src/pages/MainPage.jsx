import React from "react";
import styled from "styled-components";
import HeaderWrapper from "../components/HeaderWrapper";
import ListContainer from "../components/ListContainer";

import { EBike2 as BikeIcon } from "@styled-icons/remix-line/EBike2";
import { Netflix as NetflixIcon } from "@styled-icons/remix-fill/Netflix";
import { Guitar as GuitarIcon } from "@styled-icons/fa-solid/Guitar";
import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { BellFill as BellFillIcon } from "@styled-icons/bootstrap/BellFill";
import { PersonFill as PersonFillIcon } from "@styled-icons/bootstrap/PersonFill";
import useGeoLocation from "../hooks/useGeoLocation";
import { useHistory } from "react-router-dom";
import PotItem from "../components/PotItem";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffae6715;
`;

const Title = styled.h2`
  display: block;
  font-size: 25px;
  font-weight: bold;
  color: #202020;
`;

const ContentWrapper = styled.div`
  padding: 0 6vw;
`;

const TitleLayOut = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 1vh;
  height: 30px;
`;

const ShowMoreInfoBtn = styled.div`
  color: #20202080;
  cursor: pointer;
`;

const CategoryIcon = styled.div`
  display: block;
  padding: 15px;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: #ffc591;
  cursor: pointer;
`;

const CategoryIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlusButtonWrapper = styled.div`
  position: fixed;
  bottom: 6vh;
  right: 4vw;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  border-radius: 100%;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ff9333;
`;

const ButtonContent = styled.div`
  color: white;
  width: 40px;
  height: 40px;
`;

const BellIcon = styled(BellFillIcon)`
  display: block;
  width: 3vh;
  height: 3vh;
  color: #ffc591;
`;

const MainPageHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PersonIcon = styled(PersonFillIcon)`
  display: block;
  width: 3vh;
  height: 3vh;
  color: #ffc591;
`;

const PositionText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #202020;
`;

export default function MainPage() {
  const { myLocation } = useGeoLocation();
  const history = useHistory();
  return (
    <>
      <Background>
        <HeaderWrapper>
          <MainPageHeaderContent>
            <BellIcon />
            <PositionText
              onClick={() => {
                history.push("/address/search");
              }}
            >
              {myLocation.place
                ? `내 위치 : ${myLocation.place}`
                : "위치를 설정해주세요"}
            </PositionText>
            <PersonIcon
              onClick={() => {
                history.push("/mypage");
              }}
            />
          </MainPageHeaderContent>
        </HeaderWrapper>
        <ContentWrapper>
          <TitleLayOut>
            <Title>카테고리</Title>
          </TitleLayOut>
          <CategoryIcons>
            <CategoryIcon>
              <BikeIcon />
            </CategoryIcon>
            <CategoryIcon>
              <NetflixIcon />
            </CategoryIcon>
            <CategoryIcon>
              <GuitarIcon />
            </CategoryIcon>
          </CategoryIcons>
          <TitleLayOut>
            <Title>내 근처 N빵</Title>
            <ShowMoreInfoBtn>더 보기</ShowMoreInfoBtn>
          </TitleLayOut>
          <ListContainer>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
          </ListContainer>
          <TitleLayOut>
            <Title>전체 N빵</Title>
            <ShowMoreInfoBtn>더 보기</ShowMoreInfoBtn>
          </TitleLayOut>
          <ListContainer>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
            <PotItem
              name={"배달"}
              title={"김치찌개먹어요"}
              endTime={"1분전"}
            ></PotItem>
          </ListContainer>
        </ContentWrapper>
        <PlusButtonWrapper>
          <ButtonContent>
            <PlusIcon />
          </ButtonContent>
        </PlusButtonWrapper>
      </Background>
    </>
  );
}
