import React from "react";
import styled from "styled-components";
import BadalModal from "./BadalModal";
import { getTimeTillNow } from "../utils/date";
import { calculateDistance } from "../utils/distance";

export default function ListCard(props) {
  const {
    title,
    createAt,
    endTime,
    joinedPeople,
    totalPeople,
    distance,
    pot,
  } = props;

  const [show, setShow] = React.useState(false);

  const onToggle = () => {
    setShow(!show);
  };
  return (
    <>
      <StyledListWrapper onClick={onToggle}>
        <StyledListTopWrapper>
          <StyledDistanceText>
            {distance
              ? calculateDistance(distance)
              : totalPeople
              ? `${totalPeople}명 모집중`
              : " "}
          </StyledDistanceText>
        </StyledListTopWrapper>
        <StyledListMiddleWrapper>
          <StyledTitleText>{title}</StyledTitleText>
        </StyledListMiddleWrapper>
        <StyledListBottomWrapper>
          <StyledDistanceText>
            {getTimeTillNow(createAt, "past")} 모집
          </StyledDistanceText>
          {!totalPeople ? (
            <StyledEndTimeText>
              {endTime
                ? `마감 ${getTimeTillNow(endTime, "future")}`
                : `마감 없음`}
            </StyledEndTimeText>
          ) : (
            <StyledEndTimeText>{`${
              totalPeople - joinedPeople
            } 자리남음!`}</StyledEndTimeText>
          )}
        </StyledListBottomWrapper>
      </StyledListWrapper>
      <BadalModal pot={pot} toggleModal={onToggle} show={show} />
    </>
  );
}

const StyledListWrapper = styled.div`
  width: 90vw;
  height: 6rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border-radius: 20px;
  /* border: 1px solid grey; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 20px;
  margin: 0.5rem;
`;

const StyledListTopWrapper = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledListMiddleWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledListBottomWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitleText = styled.h2`
  color: black;
  font-size: 1.4rem;
  font-weight: bold;
`;

const StyledDistanceText = styled.span`
  font-size: 14px;
  color: grey;
`;

const StyledEndTimeText = styled.span`
  font-size: 14px;
  color: #ff0000;
`;
