import React from "react";
import styled from "styled-components";

export default function PotItem({ ...props }) {
  const { name, title, endTime } = props;
  const PotItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    padding: 0.5rem 0.1rem;
  `;

  const PotCategory = styled.div`
    flex: 0 45px;
    border: 0.5px solid black;
    text-align: center;
    padding: 3px 1px;
    border-radius: 15px;
  `;

  const PotTitle = styled.div`
    flex: 1 50px;
    padding: 3px 0px;
    padding-left: 13px;
  `;
  const PotEndTime = styled.div`
    flex: 0 45px;
    padding: 3px 0px;

    color: red;
  `;

  return (
    <PotItemContainer
      onClick={() => {
        console.log("모달!");
      }}
    >
      <PotCategory>{name}</PotCategory>
      <PotTitle>{title}</PotTitle>
      <PotEndTime>{endTime ? endTime : "마감 없음"}</PotEndTime>
    </PotItemContainer>
  );
}