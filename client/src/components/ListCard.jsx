import React from "react";
import styled from "styled-components";
import { getTimeTillNow } from "../utils/date";
import { calculateDistance } from "../utils/distance";

export default function ListCard(props) {
  const {
    id: listId,
    title,
    createAt,
    endTime,
    memo,
    fee,
    isOpened,
    ownerId,
    categoryId,
    joinedPeople,
    totalPeople,
    owner,
    distance,
  } = props;

  return (
    <StyledListWrapper>
      <StyledListTopWrapper>
        <StyledDistanceText>{calculateDistance(distance)}</StyledDistanceText>
      </StyledListTopWrapper>
      <StyledListMiddleWrapper>
        <StyledTitleText>{title}</StyledTitleText>
      </StyledListMiddleWrapper>
      <StyledListBottomWrapper>
        <StyledDistanceText>{getTimeTillNow(createAt)}전</StyledDistanceText>
        {!totalPeople ? (
          <StyledEndTimeText>
            {endTime ? `마감 ${getTimeTillNow(endTime)} 후` : `마감 없음`}
          </StyledEndTimeText>
        ) : (
          <StyledEndTimeText>{`${joinedPeople} / ${totalPeople} 명`}</StyledEndTimeText>
        )}
      </StyledListBottomWrapper>
    </StyledListWrapper>
  );
}

const StyledListWrapper = styled.div`
  width: 90%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border-radius: 20px;
  /* border: 1px solid grey; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 20px;
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
