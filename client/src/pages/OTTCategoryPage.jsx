import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";
import PageHeader from "../components/PageHeader";
import Spinner from "../components/Spinner";
import myAxios from "../utils/myAxios";

export default function DeliveryCategoryPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ottList, setOttList] = useState([]);
  const [show, setShow] = useState(false);

  const onToggle = () => {
    setShow(!show);
  };
  const getOttCategory = async () => {
    try {
      const { data } = await myAxios.get(`/pot/category/2`);
      setOttList(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getOttCategory();
  }, []);
  return (
    <Wrapper>
      <PageHeader title={"OTT 서비스"} />
      <StyledListWrapper>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ListCard
            title={"정보를 불러오는데 실패했습니다. 새로고침 해주세요."}
          />
        ) : (
          ottList.map((ott) => (
            <ListCard
              key={ott.id}
              id={ott.id}
              title={ott.title}
              createAt={ott.createAt}
              totalPeople={ott.totalPeople}
              joinedPeople={ott.joinedPeople}
              pot={ott}
              onToggle={onToggle}
              show={show}
            />
          ))
        )}
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
