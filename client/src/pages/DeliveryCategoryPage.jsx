import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";
import PageHeader from "../components/PageHeader";
import Spinner from "../components/Spinner";
import myAxios from "../utils/myAxios";
import useGeoLocation from "../hooks/useGeoLocation";

export default function DeliveryCategoryPage() {
  const { myLocation } = useGeoLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState(false);
  const [deliveryList, setDeliveryList] = useState([]);
  const getDeliveryCategory = async () => {
    try {
      const { data } = await myAxios.get(
        `/pot/near/1?latitude=${myLocation.lat}&longitude=${myLocation.lng}`
      );
      setDeliveryList(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDeliveryCategory();
  }, [location]);

  return (
    <Wrapper>
      <PageHeader title={"배달음식"} />
      <StyledListWrapper>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ListCard
            title={"정보를 불러오는데 실패했습니다. 새로고침 해주세요."}
            createAt={"2021-01-09T11:44:35.441Z"}
            endTime={"2021-01-08T03:30:06.689250"}
          />
        ) : (
          deliveryList.map((delivery) => (
            <ListCard
              key={delivery.id}
              id={delivery.id}
              distance={delivery.distance}
              title={delivery.title}
              createAt={delivery.createAt}
              endTime={delivery.endTime}
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
  height: auto;
  background-color: rgba(255, 174, 103, 0.15);
`;

const StyledListWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
