import React, { useEffect, useRef, useState } from "react";
import CustomModal from "../CustomModal";
import styled from "styled-components";
import Button from "../Button";
import { getTimeTillNow } from "../../utils/date";
import myAxios from "../../utils/myAxios";
import { useHistory } from "react-router-dom";

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5rem 1.2rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #ffae66;
`;
const XButton = styled.button`
  display: flex;
  font-weight: bold;
  font-size: large;
  border: none;
  background-color: #ffae66;
`;

const ModalHeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0rem;
`;
const BodyColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0rem;
`;

const ColumnTitle = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const Title = styled.div`
  width: 5rem;
`;

const ColumnContent = styled.div`
  display: flex;
  width: 40%;
  text-align: center;
`;

const Column = styled.div`
  width: 5rem;
`;

const ColumnWrapper = styled.div``;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export default function BadalModal({ ...props }) {
  const { toggleModal, show, pot } = props;
  const [state, setState] = useState(false);
  const onGoing = useRef(false);
  const history = useHistory();
  const getIsOnGoing = async () => {
    const { data } = await myAxios.get(`/join/${pot.id}`);
    onGoing.current = data.isOnGoing;
    console.log(onGoing.current);
  };

  console.log(onGoing.current);

  useEffect(() => {
    getIsOnGoing();
  }, [show, onGoing.current]);

  const confirm = async () => {
    const response = await myAxios.put(`/join/confirm/${pot.id}`);
    if (response.status === 200) history.push("/participatedParty");
    toggleModal();
  };

  const joinPot = async () => {
    window.open(pot.kakaoLink);
    const response = await myAxios.post("/join/apply", { potId: pot.id });
    if (response.status === 201) {
      onGoing.current = true;
      setState(!state);
    }
  };

  return (
    <CustomModal show={show} onClick={toggleModal}>
      <ModalHeader>
        <ModalHeaderText>{pot.title}</ModalHeaderText>
        <XButton onClick={toggleModal}>X</XButton>
      </ModalHeader>
      <ModalBody>
        <ColumnWrapper>
          <BodyColumn>
            <ColumnTitle>
              <Title>필요금액</Title>
            </ColumnTitle>
            <ColumnContent>
              <Column>{pot.fee}</Column>
            </ColumnContent>
          </BodyColumn>
          <BodyColumn>
            <ColumnTitle>마감기한</ColumnTitle>
            <ColumnContent>{getTimeTillNow(pot.endTime)}</ColumnContent>
          </BodyColumn>
          <BodyColumn>
            <ColumnTitle>필요금액</ColumnTitle>
            <ColumnContent>{pot.fee}</ColumnContent>
          </BodyColumn>
        </ColumnWrapper>
      </ModalBody>
      <ModalFooter>
        {onGoing.current ? (
          <Button onClick={confirm} color={"secondary"}>
            확정하기
          </Button>
        ) : (
          <Button onClick={joinPot} color={"primary"}>
            참가하기
          </Button>
        )}
      </ModalFooter>
    </CustomModal>
  );
}
