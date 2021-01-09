import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";
import PageHeader from "../components/PageHeader";

export default function DeliveryCategoryPage() {
  const [location, setLocation] = useState(false);
  const getDeliveryCategory = async () => {};
  useEffect(() => {});
  return (
    <Wrapper>
      <PageHeader title={"배달음식"} />
      <StyledListWrapper>
        <ListCard
          id={1}
          distance={10}
          title={"123"}
          createAt={"2021-01-09T11:44:35.441Z"}
          endTime={"2021-01-08T03:30:06.689250"}
        ></ListCard>
        <ListCard
          id={1}
          distance={10}
          title={"123"}
          createAt={"2021-01-09T11:44:35.441Z"}
          totalPeople={4}
          joinedPeople={2}
        ></ListCard>
        <ListCard
          id={1}
          distance={10}
          title={"123"}
          createAt={"2021-01-09T11:44:35.441Z"}
          totalPeople={4}
          joinedPeople={2}
        ></ListCard>
        <ListCard
          id={1}
          distance={10}
          title={"123"}
          createAt={"2021-01-09T11:44:35.441Z"}
          totalPeople={4}
          joinedPeople={2}
        ></ListCard>
      </StyledListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 174, 103, 0.15);
`;

const StyledListWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
