import React, { Fragment } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Party from "../components/Party";
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
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ccc;
`;

export default function ParticipatedParty(props) {
  const [parties, setParties] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    (async () => {
      const { data } = await myAxios.get("/pot/joined-pots");
      console.log(data);
      if (data) {
        setParties(data);
      }
    })();
  }, []);

  if (parties.length === 0)
    return (
      <Body>
        <PageHeader title={"내가 참가한 팟"} />
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
      <PageHeader title={"내가 참가한 팟"} />
      <Parties>
        {parties.map((party) => {
          return (
            <Party
              key={party.id}
              category={party.category}
              isRecruited={false}
              place={party.distance}
              title={party.title}
              time={party.createdAt}
              user={party.owner}
            />
          );
        })}
      </Parties>
    </Body>
  );
}
