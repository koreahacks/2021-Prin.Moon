import React from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Party from "../components/Party";
import ListCard from "../components/ListCard";
import myAxios from "../utils/myAxios";
import { useHistory } from "react-router-dom";
const Body = styled.div`
  background: rgba(255, 174, 103, 0.15);
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;
const Parties = styled.div`
  padding: 5%;
  height: 100vh;
  overflow: auto;
`;

const Middle = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoveToCreate = styled.button`
  width: 50%;
  height: 3rem;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #ccc;
`;

export default function RecruitedParty(props) {
  const [parties, setParties] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const onToggle = () => {
    setShow(!show);
  };
  const history = useHistory();
  React.useEffect(() => {
    (async () => {
      const { data } = await myAxios.get("/pot/ownered-pots");

      if (data) {
        setParties(data);
      }
    })();
  }, []);

  if (parties.length === 0)
    return (
      <Body>
        <PageHeader title={"내가 모집한 팟"} />
        <Middle>
          <MoveToCreate
            onClick={() => {
              history.push("/category/select");
            }}
          >
            파티 생성하러 가기
          </MoveToCreate>
        </Middle>
      </Body>
    );
  return (
    <Body>
      <PageHeader title={"내가 모집한 팟"} />
      <Parties>
        {parties.map((party) => {
          return (
            <ListCard
              key={party.id}
              id={party.id}
              title={party.title}
              createAt={party.createAt}
              endTime={party.endTime}
              totalPeople={party.totalPeople}
              joinedPeople={party.joinedPeople}
              pot={party}
            />
          );
        })}
      </Parties>
    </Body>
  );
}
