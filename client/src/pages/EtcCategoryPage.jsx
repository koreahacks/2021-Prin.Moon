import React, { useState } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";
import PageHeader from "../components/PageHeader";

export default function DeliveryCategoryPage() {
  const [location, setLocation] = useState(false);
  return (
    <Wrapper>
      <PageHeader title={"기타"} />
      <StyledListWrapper>
        <ListCard
          id={1}
          distance={10}
          title={"123"}
          createAt={"2021-01-09T11:44:35.441Z"}
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
