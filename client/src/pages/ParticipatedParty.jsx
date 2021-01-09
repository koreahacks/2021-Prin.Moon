import React, { Fragment } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Party from "../components/Party";
import myAxios from "../utils/myAxios";
const Body = styled.div`
  background: rgba(255, 174, 103, 0.15);
  display: block;
  width: 100%;
  height: 100%;
`;
const Parties = styled.div`
  padding: 5%;
  height: 300vw;
`;
export default function ParticipatedParty(props) {
  const [parties, setParties] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const { data } = await myAxios.get("/pot/joined-pots");
      console.log(data);
      if (data) {
        setParties(data);
      }
    })();
  }, []);

  if(parties.length === 0) return (
    <Body>
      <PageHeader title={"내가 참가한 팟"} />
      파티가 없습니다 ㅠ.ㅠ 
    </Body>
  )
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
