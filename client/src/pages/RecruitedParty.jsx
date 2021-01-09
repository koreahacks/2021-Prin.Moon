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
export default function RecruitedParty(props) {
  const [parties, setParties] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const { data } = await myAxios.get("/pot/ownered-pots");

      if (data) {
        setParties(data);
      }
    })();
  }, []);

  return (
    <Body>
      <PageHeader title={"내가 모집한 팟"} />
      <Parties>
        {parties.map((party) => {
          return (
            <Party
              key={party.id}
              isRecruited={true}
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
