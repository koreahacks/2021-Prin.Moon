import React, { useState } from "react";

import BadalModal from "./JoinModals/BadalModal";
import styled from "styled-components";
import { getTimeTillNow } from "../utils/date";

export default function PotItem({ ...props }) {
  const { pot } = props;

  const PotItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    padding: 0.5rem 0.1rem;
    margin: 0.3rem 0.1rem;
    cursor: pointer;
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
    font-size: large;
    padding-left: 13px;
  `;
  const PotEndTime = styled.div`
    flex: 0 80px;
    padding: 3px 1px;
    text-align: right;
    color: red;
    font-size: small;
  `;

  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <PotItemContainer onClick={toggleModal}>
      <PotCategory>{pot.category.name}</PotCategory>
      <PotTitle>{pot.title}</PotTitle>
      <PotEndTime>
        {pot.endTime ? getTimeTillNow(pot.endTime) : "마감없음"}
      </PotEndTime>
      <BadalModal toggleModal={toggleModal} show={show} pot={pot} />
    </PotItemContainer>
  );
}
